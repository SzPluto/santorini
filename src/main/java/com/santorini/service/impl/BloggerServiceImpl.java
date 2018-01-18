package com.santorini.service.impl;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.santorini.dao.BloggerDao;
import com.santorini.entity.Blogger;
import com.santorini.service.BloggerService;

/**
 * 博主Service实现类
 * @author pluto
 *
 */
@Service("bloggerService")
public class BloggerServiceImpl implements BloggerService{
	
	@Resource
	private BloggerDao bloggerDao;

	public Blogger getByUserName(String UserName) {
		return bloggerDao.getByUserName(UserName);
	}
	
	/**
	 * 查询博主信息
	 * @return
	 */
	public Blogger find(){
		return bloggerDao.find();
	}
}
