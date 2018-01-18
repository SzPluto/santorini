package com.santorini.dao;

import java.util.List;
import java.util.Map;

import com.santorini.entity.BlogType;

/**
 * ��������Dao�ӿ�
 * @author Shenzhao
 *
 */
public interface BlogTypeDao {
	
	/**
	 * ��ѯ���в������ͣ��Լ���Ӧ�Ĳ�������
	 * @return
	 */
	public List<BlogType> countList();
	
	/**
	 * ͨ��id���Ҳ�������ʵ��
	 * @return
	 * 
	 */
	public BlogType findById(Integer id);
	
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
