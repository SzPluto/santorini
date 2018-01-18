package com.santorini.service;

import java.util.List;
import java.util.Map;

import com.santorini.entity.BlogType;

/**
 * 博客类型Service接口
 * @author Shenzhao
 *
 */
public interface BlogTypeService {

	/**
	 * 查询所有博客类型，以及对应的博客数量
	 * @return
	 */
	public List<BlogType> countList();
	
	/** 
	 * 分页查询博客类别信息
	 * @param map
	 * @return
	 */
	public List<BlogType> list(Map<String,Object> map);
	
	/**
	 * 获取总记录数
	 * @param map
	 * @return
	 */
	public Long getTotal(Map<String,Object> map);
}
