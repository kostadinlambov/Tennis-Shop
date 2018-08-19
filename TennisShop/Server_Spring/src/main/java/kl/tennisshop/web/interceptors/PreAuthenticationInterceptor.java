
package kl.tennisshop.web.interceptors;

import kl.tennisshop.annotations.PreAuthenticate;
import org.springframework.stereotype.Component;
import org.springframework.web.method.HandlerMethod;
import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;
import org.springframework.web.servlet.resource.ResourceHttpRequestHandler;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

@Component
public class PreAuthenticationInterceptor extends HandlerInterceptorAdapter {
    private boolean isResourceHandler(Object handler)
    {
        return handler instanceof ResourceHttpRequestHandler;
    }

    private boolean isLoggedIn(HttpSession session) {
        return session.getAttribute("user-id") != null;
    }

    private boolean isInRole(String role, HttpSession session) {
        // Uncomment this
//        return isLoggedIn(session) &&
//                ((UserRole)session.getAttribute("user-role")).ordinal()
//                        >= UserRole.valueOf(role).ordinal();

        // Comment this
        return true;
    }

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        if(!this.isResourceHandler(handler)) {
            HandlerMethod actionHandler = (HandlerMethod) handler;

            if (actionHandler != null) {
                PreAuthenticate annotation = actionHandler.getMethodAnnotation(PreAuthenticate.class);

                if (annotation != null) {
                    boolean shouldBeLoggedIn = annotation.loggedIn();
                    String shouldBeInRole = annotation.inRole();

                    boolean isLoggedIn = this.isLoggedIn(request.getSession());
                    boolean isInRole = (shouldBeLoggedIn &&
                            !this.isInRole(shouldBeInRole, request.getSession()));

                    if (shouldBeLoggedIn != isLoggedIn
                            || isInRole) {

                        if(isLoggedIn && !isInRole) {
                            response.sendRedirect("/home");
                        } else {
                            response.sendRedirect("/login");
                        }

                        return false;
                    }
                }
            }
        }

        return super.preHandle(request, response, handler);
    }
}
