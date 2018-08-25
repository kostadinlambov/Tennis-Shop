package kl.tennisshop.config;

import kl.tennisshop.web.interceptors.LogsInterceptor;
import kl.tennisshop.web.interceptors.ResponseInterceptor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebMvcConfiguration implements WebMvcConfigurer {
    private final LogsInterceptor logsInterceptor;
    private final ResponseInterceptor responseInterceptor;


    public WebMvcConfiguration(LogsInterceptor logsInterceptor, ResponseInterceptor responseInterceptor) {
        this.logsInterceptor = logsInterceptor;
        this.responseInterceptor = responseInterceptor;
    }

    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        registry.addInterceptor(this.logsInterceptor);
        registry.addInterceptor(this.responseInterceptor);

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
