package com.santorini.dao;

import java.util.List;
import java.util.Map;

import com.santorini.entity.Comment;

/**
 * ����Dao�ӿ�
 * @author Administrator
 *
 */
public interface CommentDao {

	/**
	 * ��ѯ�û�������Ϣ
	 * @param map
	 * @return
	 */
	public List<Comment> list(Map<String,Object> map);
}
