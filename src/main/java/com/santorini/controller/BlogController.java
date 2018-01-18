package com.santorini.controller;

import java.util.HashMap;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import com.santorini.entity.Blog;
import com.santorini.service.BlogService;
import com.santorini.service.CommentService;

/**
 * 博客Controller层
 * @author Administrator
 *
 */
@Controller
@RequestMapping("/blog")
public class BlogController {

	@Resource
	private BlogService blogService;
	
	@Resource
	private CommentService commentService;
	
	/**
	 * 请求博客详细信息
	 * @param id
	 * @param request
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/articles/{id}")
	public ModelAndView details(@PathVariable("id") Integer id,HttpServletRequest request)throws Exception{
		ModelAndView mav=new ModelAndView();
		Blog blog=blogService.findById(id);
		mav.addObject("blog",blog);
		blog.setClickHit(blog.getClickHit()+1);
		blogService.update(blog);
		Map<String,Object> map=new HashMap<String,Object>();
		map.put("blogId", blog.getId());
		map.put("state", 1);
		mav.addObject("commentList", commentService.list(map));
		mav.addObject("pageTitle", blog.getTitle()+"java开源博客系统");
		mav.addObject("mainPage", "foreground/blog/view.jsp");
		mav.setViewName("mainTemp");
		return mav;
	}
}
