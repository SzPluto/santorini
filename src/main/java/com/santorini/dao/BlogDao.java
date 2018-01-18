package com.santorini.dao;

import java.util.List;
import java.util.Map;

import com.santorini.entity.Blog;

/**
 * 博客Dao接口
 * @author Shenzhao
 *
 */
public interface BlogDao {   
	/**
	 * 根据日期月份分组查询
	 * @return
	 */
	public List<Blog> countList();
	
	/**
	 * 分页查询博客
	 * @param map 
	 * @return
	 */
	public List<Blog> list(Map<String,Object>map);

	/**
	 * 获取总记录数
	 * @param map
	 * @return
	 */
	public Long getTotal(Map<String,Object>map);
	
	/**
	 * 根据id查找实体
	 * @param id
	 * @return
	 */
	public Blog findById(Integer id);
	
	/**
	 * 更新博客信息
	 * @param blog
	 * @return
	 */
	
	public Integer update(Blog blog);
	/**
	 * 获取上一个博客
	 * @param id
	 * @return
	 */
	public Blog getLastBlog(Integer id);
	
	/**
	 * 获取下一个博客
	 * @param id
	 * @return
	 */
	public Blog getNextBlog(Integer id);
	
	/**
	 * 添加博客信息
	 * @param blog
	 * @return
	 */
	public Integer add(Blog blog);
	
	/**
	 * 删除博客信息
	 * @param id
	 * @return
	 */
	public Integer delete(Integer id);
}
