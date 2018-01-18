package com.santorini.entity;

import java.util.Date;

/**
 * ����ʵ��
 * @author Shenzhao
 *
 */
public class Blog {
	
	private Integer id;//���
	private String title;//���ͱ���
	private String summary;//ժҪ
	private Date releaseDate;//��������
	private Integer clickHit;//�����
	private Integer replyHit;//�ظ���
	private String content;//��������
	private String contentNoTag; // �������ݣ�����ҳ��ǩ Lucene�ִ��õ�
	
	private BlogType blogType;//��������
	
	private String keyWord;//�ؼ��� �ո����
	private Integer blogCount;//�������� �ǲ���ʵ������  ��Ҫ�Ǹ��ݷ������ڹ鵵��ѯ�����õ�
	private String releaseDateStr;//�������ڵ��ַ��� ֻȡ�����
	
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getSummary() {
		return summary;
	}
	public void setSummary(String summary) {
		this.summary = summary;
	}
	public Date getReleaseDate() {
		return releaseDate;
	}
	public void setReleaseDate(Date releaseDate) {
		this.releaseDate = releaseDate;
	}
	public Integer getClickHit() {
		return clickHit;
	}
	public void setClickHit(Integer clickHit) {
		this.clickHit = clickHit;
	}
	public Integer getReplyHit() {
		return replyHit;
	}
	public void setReplyHit(Integer replyHit) {
		this.replyHit = replyHit;
	}
	public String getContent() {
		return content;
	}
	public void setContent(String content) {
		this.content = content;
	}
	public String getContentNoTag() {
		return contentNoTag;
	}
	public void setContentNoTag(String contentNoTag) {
		this.contentNoTag = contentNoTag;
	}
	
	public BlogType getBlogType() {
		return blogType;
	}
	public void setBlogType(BlogType blogType) {
		this.blogType = blogType;
	}
	public String getKeyWord() {
		return keyWord;
	}
	public void setKeyWord(String keyWord) {
		this.keyWord = keyWord;
	}
	public Integer getBlogCount() {
		return blogCount;
	}
	public void setBlogCount(Integer blogCount) {
		this.blogCount = blogCount;
	}
	public String getReleaseDateStr() {
		return releaseDateStr;
	}
	public void setReleaseDateStr(String releaseDateStr) {
		this.releaseDateStr = releaseDateStr;
	}
	

}
