package com.santorini.service;

import java.util.List;
import java.util.Map;

import com.santorini.entity.Blog;

/**
 * ����Service�ӿ�
 * @author Shenzhao
 *
 */
public interface BlogService {

	/**
	 * ���������·ݷ����ѯ
	 * @return
	 */
	public List<Blog> countList();
	
	/**
	 * ��ҳ��ѯ����
	 * @param map 
	 * @return
	 */
	public List<Blog>list(Map<String,Object>map);

	/**
	 * ��ȡ�ܼ�¼��
	 * @param map
	 * @return
	 */
	public Long getTotal(Map<String,Object>map);

	/**
	 * ����id����ʵ��
	 * @param id
	 * @return
	 */
	public Blog findById(Integer id);
	
	/**
	 * ���²�����Ϣ
	 * @param blog
	 * @return
	 */
	public Integer update(Blog blog);
	
	/**
	 * ��Ӳ�����Ϣ
	 * @param blog
	 * @return
	 */
	public Integer add(Blog blog);
	
	/**
	 * ɾ��������Ϣ
	 * @param id
	 * @return
	 */
	public Integer delete(Integer id);
}
