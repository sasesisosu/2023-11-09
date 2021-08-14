package com.lyg.photogramstart.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.lyg.photogramstart.domain.user.User;

// JpaRepository를 상속하면 어노테이션이 없어도 IoC등록이 자동으로 됨
public interface UserRepository extends JpaRepository<User, Integer>{
	
	User findByUsername(String username);
}
