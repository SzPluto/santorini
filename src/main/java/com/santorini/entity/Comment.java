package com.santorini.entity;

import java.util.Date;

/**
 * ����ʵ��
 * @author Administrator
 *
 */
public class Comment {

	private Integer id; // ���
	private String userIp; // �û�IP
	private String content; // ��������
	private Blog blog; // �����۵Ĳ���
	private Date commentDate; // ��������
	private Integer state; // ���״̬ 0 ����� 1 ���ͨ�� 2 ���δͨ��
	
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getUserIp() {
		return userIp;
	}
	public void setUserIp(String userIp) {
		this.userIp = userIp;
	}
	public String getContent() {
		return content;
	}
	public void setContent(String content) {
		this.content = content;
	}
	public Blog getBlog() {
		return blog;
	}
	public void setBlog(Blog blog) {
		this.blog = blog;
	}
	public Date getCommentDate() {
		return commentDate;
	}
	public void setCommentDate(Date commentDate) {
		this.commentDate = commentDate;
	}
	public Integer getState() {
		return state;
	}
	public void setState(Integer state) {
		this.state = state;
	}
	
	
}
