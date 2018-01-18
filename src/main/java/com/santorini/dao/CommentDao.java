package com.santorini.dao;

import java.util.List;
import java.util.Map;

import com.santorini.entity.Comment;

/**
 * 评论Dao接口
 * @author Administrator
 *
 */
public interface CommentDao {

	/**
	 * 查询用户评论信息
	 * @param map
	 * @return
	 */
	public List<Comment> list(Map<String,Object> map);
}
