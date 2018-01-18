package com.santorini.service;

import java.util.List;
import java.util.Map;

import com.santorini.entity.Comment;

/**
 * 评论Service接口
 * @author Administrator
 *
 */
public interface CommentService {

	/**
	 * 查询用户评论信息
	 * @param map
	 * @return
	 */
	public List<Comment> list(Map<String,Object> map);
}
