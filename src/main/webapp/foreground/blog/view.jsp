<script type="text/javascript" src="${pageContext.request.contextPath}/static/ueditor/third-party/SyntaxHighlighter/shCore.js"></script>
<link rel="stylesheet" href="${pageContext.request.contextPath}/static/ueditor/third-party/SyntaxHighlighter/shCoreDefault.css">
<script type="text/javascript">
    SyntaxHighlighter.all();
    
    function showOtherComment(){
    	$(".otherComment").show();
    }
</script>

<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>


<div class="data_list">
	<div id="a" class="data_list_title">
		博客信息
	</div>
	<div>
		<div class="blog_title"><h3><strong>${blog.title }</strong></h3></div>
		<div class="blog_info">
			发布时间： <fmt:formatDate value="${blog.releaseDate }" type="date" pattern="yyyy-MM-dd HH:mm"/>&nbsp;&nbsp;博客类别：${blog.blogType.typeName }&nbsp;&nbsp;阅读(${blog.clickHit })
		</div>
		<div class="blog_content">
		${blog.content }
		</div>
	</div>
</div>
<!-- <div class="data_list">
	<div class="data_list_title">
		<img src="/static/images/comment_icon.png"/>
		评论信息
		<c:if test="${commentList.size()>10 }">
			<a href="javascript:showOtherComment()" style="float: right;padding-right: 40px;">显示所有评论</a>
		</c:if>
	</div>
	<div class="commentDatas">
		<c:choose>
			<c:when test="${commentList.size()==0 }">
				暂无评论
			</c:when>
			<c:otherwise>
				<c:forEach var="comment" items="${commentList}" varStatus="status">
					<c:choose>
						<c:when test="${status.index<10 }">
							<div class="comment">
								<span><font>${status.index+1 }楼&nbsp;&nbsp;&nbsp;&nbsp;${comment.userIp }：</font>${comment.content }&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[&nbsp;<fmt:formatDate value="${comment.commentDate }" type="date" pattern="yyyy-MM-dd HH:mm"/>&nbsp;]</span>			
							</div>
						</c:when>
						<c:otherwise>
							<div class="otherComment">
								<span><font>${status.index+1 }楼&nbsp;&nbsp;&nbsp;&nbsp;${comment.userIp }：</font>${comment.content }&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[&nbsp;<fmt:formatDate value="${comment.commentDate }" type="date" pattern="yyyy-MM-dd HH:mm"/>&nbsp;]</span>			
							</div>
						</c:otherwise>
					</c:choose>
				</c:forEach>
			</c:otherwise>
		</c:choose>
	</div>
</div>
 -->