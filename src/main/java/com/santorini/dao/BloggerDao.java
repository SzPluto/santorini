package com.santorini.dao;

import com.santorini.entity.Blogger;

/**
 * ����Dao�ӿ�
 * @author pluto
 *
 */
public interface BloggerDao {
	
	/**
	 * ͨ���û�����ѯ�û�
	 * @param UserName
	 * @return
	 */
	public Blogger getByUserName(String UserName);
	
	/**
	 * ��ѯ������Ϣ
	 * @return
	 */
	public Blogger find();

}
