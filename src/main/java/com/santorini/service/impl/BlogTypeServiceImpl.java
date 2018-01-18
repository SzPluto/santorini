package com.santorini.service.impl;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.santorini.dao.BlogTypeDao;
import com.santorini.entity.BlogType;
import com.santorini.service.BlogTypeService;

/**
 * 博客类型Service实现类
 * @author Shenzhao
 *
 */
@Service("blogTypeService")
public class BlogTypeServiceImpl implements BlogTypeService{
	
	@Resource
	private BlogTypeDao blogTypeDao;

	public List<BlogType> countList() {
		return blogTypeDao.countList();
	}

	public List<BlogType> list(Map<String, Object> map) {
		return blogTypeDao.list(map);
	}

	public Long getTotal(Map<String, Object> map) {
		return blogTypeDao.getTotal(map);
	}	
}
