package kl.tennisshop.config;

import kl.tennisshop.web.interceptors.CaptchaInterceptor;
import kl.tennisshop.web.interceptors.PreAuthenticationInterceptor;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebMvcConfiguration implements WebMvcConfigurer {

    private final HandlerInterceptor titleModifierInterceptor;
    private final CaptchaInterceptor captchaInterceptor;
    private final PreAuthenticationInterceptor preAuthenticationInterceptor;

    public WebMvcConfiguration(@Qualifier("title_modifier") HandlerInterceptor titleModifierInterceptor, CaptchaInterceptor captchaInterceptor, PreAuthenticationInterceptor preAuthenticationInterceptor) {
        this.titleModifierInterceptor = titleModifierInterceptor;
        this.captchaInterceptor = captchaInterceptor;
        this.preAuthenticationInterceptor = preAuthenticationInterceptor;
    }

    @Override
    public void addInterceptors(InterceptorRegistry registry) {
//        registry.addInterceptor(this.titleModifierInterceptor);
//        registry.addInterceptor(this.captchaInterceptor);
//        registry.addInterceptor(this.preAuthenticationInterceptor);

    }

    @Bean
    public WebMvcConfigurer webMvcConfigurer(){
        return new WebMvcConfigurer(){
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/**")
                        .allowedOrigins("*")
                        .allowedHeaders("*")
                        .exposedHeaders("Content-Type");
            }
        };
    }
}
