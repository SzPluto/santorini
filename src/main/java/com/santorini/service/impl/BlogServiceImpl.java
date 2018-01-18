package com.santorini.service.impl;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.santorini.dao.BlogDao;
import com.santorini.entity.Blog;
import com.santorini.service.BlogService;

/**
 * 博客Service实现类
 * @author Shenzhao
 *
 */
@Service("blogService")
public class BlogServiceImpl implements BlogService{
	
	@Resource
	private BlogDao blogDao;

	public List<Blog> countList() {
		return blogDao.countList();
	}

	public List<Blog> list(Map<String, Object> map) {
		return blogDao.list(map);
	}

	public Long getTotal(Map<String, Object> map) {
		return blogDao.getTotal(map);
	}

	public Blog findById(Integer id) {
		return blogDao.findById(id);
	}

	public Integer update(Blog blog) {
		return blogDao.update(blog);
	}

	public Integer add(Blog blog) {
		return blogDao.add(blog);
	}

	public Integer delete(Integer id) {
		return blogDao.delete(id);
	}
}
