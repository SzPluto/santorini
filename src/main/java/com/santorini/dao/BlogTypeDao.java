package com.santorini.dao;

import java.util.List;
import java.util.Map;

import com.santorini.entity.BlogType;

/**
 * 博客类型Dao接口
 * @author Shenzhao
 *
 */
public interface BlogTypeDao {
	
	/**
	 * 查询所有博客类型，以及对应的博客数量
	 * @return
	 */
	public List<BlogType> countList();
	
	/**
	 * 通过id查找博客类型实体
	 * @return
	 * 
	 */
	public BlogType findById(Integer id);
	
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
