package kl.tennisshop.web.interceptors;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


@Component
public class ResponseInterceptor extends HandlerInterceptorAdapter {

    @Override
    public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler, ModelAndView modelAndView) throws Exception {

            System.out.println();
            response.addHeader("Success", "true");
            response.addHeader("Test", "false");
        response.getWriter()
                .append("Success : true");
            System.out.println();


    }
}
