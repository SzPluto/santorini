package com.santorini.controller;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import org.apache.shiro.SecurityUtils;
import org.apache.shiro.authc.UsernamePasswordToken;
import org.apache.shiro.subject.Subject;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.santorini.entity.Blogger;
import com.santorini.service.BloggerService;
import com.santorini.util.CryptographyUtil;

/**
 * 博主Controller层
 * @author pluto
 *
 */
@Controller
@RequestMapping("/blogger")
public class BloggerController {

	@Resource
	private BloggerService bloggerService;
	
	@RequestMapping("/login")
	public String login(Blogger blogger,HttpServletRequest request){
		Subject subject = SecurityUtils.getSubject();
		UsernamePasswordToken token=new UsernamePasswordToken(blogger.getUserName(),CryptographyUtil.md5(blogger.getPassword(), "pluto"));		
		try{
			subject.login(token);//登录认证
			return "redirect:/admin/main.jsp";
		}catch(Exception e){
			e.printStackTrace();
			request.setAttribute("blogger", blogger);
			request.setAttribute("errorInfo", "用户名或者密码错误！");
			return "login";
		}
	}
}
