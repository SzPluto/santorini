package com.santorini.service;

import com.santorini.entity.Blogger;

/**
 * ����Service�ӿ�
 * @author pluto
 *
 */
public interface BloggerService {

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
