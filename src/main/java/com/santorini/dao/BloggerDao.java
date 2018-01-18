package com.santorini.dao;

import com.santorini.entity.Blogger;

/**
 * 博主Dao接口
 * @author pluto
 *
 */
public interface BloggerDao {
	
	/**
	 * 通过用户名查询用户
	 * @param UserName
	 * @return
	 */
	public Blogger getByUserName(String UserName);
	
	/**
	 * 查询博主信息
	 * @return
	 */
	public Blogger find();

}
