package com.santorini.service.impl;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.santorini.dao.CommentDao;
import com.santorini.entity.Comment;
import com.santorini.service.CommentService;

/**
 * 评论Service实现类
 * @author Administrator
 *
 */
@Service("commentService")
public class CommentServiceImpl implements CommentService{

	@Resource
	private CommentDao commentDao;
	
	public List<Comment> list(Map<String, Object> map) {
		return commentDao.list(map);
	}

}
