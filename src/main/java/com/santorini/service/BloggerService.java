package com.santorini.service;

import com.santorini.entity.Blogger;

/**
 * 博主Service接口
 * @author pluto
 *
 */
public interface BloggerService {

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
