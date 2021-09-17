package com.lyg.photogramstart.web;

import java.util.HashMap;
import java.util.Map;

import javax.validation.Valid;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.lyg.photogramstart.domain.user.User;
import com.lyg.photogramstart.handler.ex.CustomValidationException;
import com.lyg.photogramstart.service.AuthService;
import com.lyg.photogramstart.web.dto.auth.SignupDto;

@Controller // IoC등록, 파일 리턴
public class AuthController {
	
	private static final Logger log = LoggerFactory.getLogger(AuthController.class);

	@Autowired
	private AuthService authService;
	
	@GetMapping("/auth/signin")
	public String signinForm() {
		return "auth/signin";
	}
	
	@GetMapping("/auth/signup")
	public String signupForm() {
		System.out.println("11111");
		return "auth/signup";
	}
	
	@PostMapping("/auth/signup")
	public String signup(@Valid SignupDto signupDto, BindingResult bindingResult) { // 기본적으로 x-www-form-urlencoded형태로 받아줌 key=value
		System.out.println("22222");
		User user = signupDto.toEntity();
		User userEntity = authService.userJoin(user);
		return "auth/signin";
		
	}
	
}
