package com.santorini.service.impl;

import java.util.List;

import javax.servlet.ServletContext;
import javax.servlet.ServletContextEvent;
import javax.servlet.ServletContextListener;

import org.springframework.beans.BeansException;
import org.springframework.context.ApplicationContext;
import org.springframework.context.ApplicationContextAware;
import org.springframework.stereotype.Component;

import com.santorini.entity.Blog;
import com.santorini.entity.BlogType;
import com.santorini.entity.Blogger;
import com.santorini.service.BlogService;
import com.santorini.service.BlogTypeService;
import com.santorini.service.BloggerService;

@Component
public class InitComponent implements ServletContextListener,ApplicationContextAware{

	private static ApplicationContext applicationContext;
	
	public void contextInitialized(ServletContextEvent sce) {
		ServletContext application=sce.getServletContext();
		BloggerService bloggerService=(BloggerService) applicationContext.getBean("bloggerService");
		Blogger blogger=bloggerService.find(); // 获取博主信息
		blogger.setPassword(null);
		application.setAttribute("blogger", blogger);
		
		BlogTypeService blogTypeService=(BlogTypeService) applicationContext.getBean("blogTypeService");
		List<BlogType> blogTypeCountList=blogTypeService.countList(); // 查询博客类别以及博客的数量
		application.setAttribute("blogTypeCountList", blogTypeCountList);
		
		BlogService blogService=(BlogService) applicationContext.getBean("blogService");
		List<Blog> blogCountList=blogService.countList(); // 根据日期分组查询博客
		application.setAttribute("blogCountList", blogCountList);
	}

	public void contextDestroyed(ServletContextEvent sce) {
		// TODO Auto-generated method stub
		
	}

	public void setApplicationContext(ApplicationContext applicationContext) throws BeansException {
		this.applicationContext=applicationContext;
	}

}