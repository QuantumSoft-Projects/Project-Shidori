/*package com.test.Config;



import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SecurityConfigadmin {

    @Bean
    public SecurityFilterChain adminsecurityFilterChain(HttpSecurity http) throws Exception {
        http.csrf(csrf -> csrf.disable())
            .authorizeHttpRequests(auth -> auth
                .requestMatchers("/discounts/**").authenticated()
                .anyRequest().permitAll()
            )
            .sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
            .httpBasic();
        return http.build();
    }

    @Bean
    public UserDetailsService adminuserDetailsService() {
        UserDetails user = User.withUsername("admin")
            .password("{noop}admin123")  // "{noop}" means no password encoding
            .roles("ADMIN")
            .build();
        return new InMemoryUserDetailsManager(user);
    }
}
*/