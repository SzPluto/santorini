package com.santorini.service;

import java.util.List;
import java.util.Map;

import com.santorini.entity.BlogType;

/**
 * ��������Service�ӿ�
 * @author Shenzhao
 *
 */
public interface BlogTypeService {

	/**
	 * ��ѯ���в������ͣ��Լ���Ӧ�Ĳ�������
	 * @return
	 */
	public List<BlogType> countList();
	
	/** 
	 * ��ҳ��ѯ���������Ϣ
	 * @param map
	 * @return
	 */
	public List<BlogType> list(Map<String,Object> map);
	
	/**
	 * ��ȡ�ܼ�¼��
	 * @param map
	 * @return
	 */
	public Long getTotal(Map<String,Object> map);
}
