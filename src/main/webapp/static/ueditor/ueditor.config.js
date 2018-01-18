/**
 * ueditor����������
 * �������������������༭��������
 */
/**************************��ʾ********************************
 * ���б�ע�͵��������ΪUEditorĬ��ֵ��
 * �޸�Ĭ������������ȷ���Ѿ���ȫ��ȷ�ò�������ʵ��;��
 * ��Ҫ�������޸ķ�����һ����ȡ���˴�ע�ͣ�Ȼ���޸ĳɶ�Ӧ��������һ������ʵ�����༭��ʱ�����Ӧ������
 * �������༭��ʱ����ֱ��ʹ�þɰ������ļ��滻�°������ļ�,���õ��ľɰ������ļ�����ȱ���¹�������Ĳ��������½ű�����
 **************************��ʾ********************************/

(function () {

    /**
     * �༭����Դ�ļ���·����������ʾ�ĺ����ǣ��Ա༭��ʵ����ҳ��Ϊ��ǰ·����ָ��༭����Դ�ļ�����dialog���ļ��У���·����
     * ���ںܶ�ͬѧ��ʹ�ñ༭����ʱ����ֵ�����·�����⣬�˴�ǿ�ҽ�����ʹ��"�������վ��Ŀ¼�����·��"�������á�
     * "�������վ��Ŀ¼�����·��"Ҳ������б�ܿ�ͷ������"/myProject/ueditor/"������·����
     * ���վ�����ж������ͬһ�㼶��ҳ����Ҫʵ�����༭������������ͬһUEditor��ʱ�򣬴˴���URL���ܲ�������ÿ��ҳ��ı༭����
     * ��ˣ�UEditor�ṩ����Բ�ͬҳ��ı༭���ɵ������õĸ�·����������˵������Ҫʵ�����༭����ҳ�����д�����´��뼴�ɡ���Ȼ����Ҫ��˴���URL���ڶ�Ӧ�����á�
     * window.UEDITOR_HOME_URL = "/xxxx/xxxx/";
     */
    var URL = window.UEDITOR_HOME_URL || getUEBasePath();

    /**
     * ���������塣ע�⣬�˴������漰��·�������ñ���©URL������
     */
    window.UEDITOR_CONFIG = {

        //Ϊ�༭��ʵ�����һ��·����������ܱ�ע��
        UEDITOR_HOME_URL: URL

        // ������ͳһ����ӿ�·��
        , serverUrl: URL + "jsp/controller.jsp"

        //�������ϵ����еĹ��ܰ�ť�������򣬿�����new�༭����ʵ��ʱѡ���Լ���Ҫ�����¶���
        , toolbars: [[
            'fullscreen', 'source', '|', 'undo', 'redo', '|',
            'bold', 'italic', 'underline', 'fontborder', 'strikethrough', 'superscript', 'subscript', 'removeformat', 'formatmatch', 'autotypeset', 'blockquote', 'pasteplain', '|', 'forecolor', 'backcolor', 'insertorderedlist', 'insertunorderedlist', 'selectall', 'cleardoc', '|',
            'rowspacingtop', 'rowspacingbottom', 'lineheight', '|',
            'customstyle', 'paragraph', 'fontfamily', 'fontsize', '|',
            'directionalityltr', 'directionalityrtl', 'indent', '|',
            'justifyleft', 'justifycenter', 'justifyright', 'justifyjustify', '|', 'touppercase', 'tolowercase', '|',
            'link', 'unlink', 'anchor', '|', 'imagenone', 'imageleft', 'imageright', 'imagecenter', '|',
            'simpleupload', 'insertimage', 'emotion', 'scrawl', 'insertvideo', 'music', 'attachment', 'map', 'gmap', 'insertframe', 'insertcode', 'webapp', 'pagebreak', 'template', 'background', '|',
            'horizontal', 'date', 'time', 'spechars', 'snapscreen', 'wordimage', '|',
            'inserttable', 'deletetable', 'insertparagraphbeforetable', 'insertrow', 'deleterow', 'insertcol', 'deletecol', 'mergecells', 'mergeright', 'mergedown', 'splittocells', 'splittorows', 'splittocols', 'charts', '|',
            'print', 'preview', 'searchreplace', 'drafts', 'help'
        ]]
        //�������ڹ�������ʱ��ʾ��tooltip��ʾ,����֧���Զ����������ã�����������ֵΪ׼
        //,labelMap:{
        //    'anchor':'', 'undo':''
        //}

        //����������,Ĭ����zh-cn������Ҫ�Ļ�Ҳ����ʹ�����������ķ�ʽ���Զ��������л�����Ȼ��ǰ��������lang�ļ����´��ڶ�Ӧ�������ļ���
        //langֵҲ����ͨ���Զ���ȡ (navigator.language||navigator.browserLanguage ||navigator.userLanguage).toLowerCase()
        //,lang:"zh-cn"
        //,langPath:URL +"lang/"

        //����������,Ĭ����default������Ҫ�Ļ�Ҳ����ʹ�����������ķ�ʽ���Զ��������л�����Ȼ��ǰ��������themes�ļ����´��ڶ�Ӧ�������ļ���
        //��������Ƥ��:default
        //,theme:'default'
        //,themePath:URL +"themes/"

        //,zIndex : 900     //�༭���㼶�Ļ���,Ĭ����900

        //���getAllHtml���������ڶ�Ӧ��head��ǩ�����Ӹñ������á�
        //,charset:"gbk"

        //��ʵ�����༭����ҳ���ֶ��޸ĵ�domain���˴���Ҫ����Ϊtrue
        //,customDomain:false

        //����������Ŀ
        //,isShow : true    //Ĭ����ʾ�༭��

        //,textarea:'editorValue' // �ύ��ʱ����������ȡ�༭���ύ���ݵ����õĲ�������ʵ��ʱ���Ը�����name���ԣ��Ὣname������ֵ��Ϊÿ��ʵ���ļ�ֵ������ÿ��ʵ������ʱ���������ֵ

        //,initialContent:'��ӭʹ��ueditor!'    //��ʼ���༭��������,Ҳ����ͨ��textarea/script��ֵ������������

        //,autoClearinitialContent:true //�Ƿ��Զ�����༭����ʼ���ݣ�ע�⣺���focus��������Ϊtrue,���ҲΪ�棬��ô�༭��һ�����ͻᴥ�����³�ʼ�������ݿ�������

        //,focus:false //��ʼ��ʱ���Ƿ��ñ༭����ý���true��false

        //����Զ��壬��ø�p��ǩ���µ��иߣ�Ҫ����������ʱ������������
        //,initialStyle:'p{line-height:1em}'//�༭���㼶�Ļ���,���������ı������

        //,iframeCssUrl: URL + '/themes/iframe.css' //���༭�����iframe����һ��css�ļ�

        //indentValue
        //������������,Ĭ����2em
        //,indentValue:'2em'

        //,initialFrameWidth:1000  //��ʼ���༭�����,Ĭ��1000
        //,initialFrameHeight:320  //��ʼ���༭���߶�,Ĭ��320

        //,readonly : false //�༭����ʼ��������,�༭�����Ƿ���ֻ���ģ�Ĭ����false

        //,autoClearEmptyNode : true //getContentʱ���Ƿ�ɾ���յ�inlineElement�ڵ㣨����Ƕ�׵������

        //�����Զ�����
        //,enableAutoSave: true
        //�Զ�������ʱ�䣬 ��λms
        //,saveInterval: 500

    	,fullscreen : true //是否开启初始化时即全屏，默认关闭

        //,imagePopup:true      //ͼƬ�����ĸ��㿪�أ�Ĭ�ϴ�

        //,autoSyncData:true //�Զ�ͬ���༭��Ҫ�ύ������
        //,emotionLocalization:false //�Ƿ������鱾�ػ���Ĭ�Ϲرա���Ҫ������ȷ��emotion�ļ����°��������ṩ��images�����ļ���

        //ճ��ֻ������ǩ��ȥ����ǩ��������
        //,retainOnlyLabelPasted: false

        //,pasteplain:false  //�Ƿ�Ĭ��Ϊ���ı�ճ����falseΪ��ʹ�ô��ı�ճ����trueΪʹ�ô��ı�ճ��
        //���ı�ճ��ģʽ�µĹ��˹���
        //'filterTxtRules' : function(){
        //    function transP(node){
        //        node.tagName = 'p';
        //        node.setStyle();
        //    }
        //    return {
        //        //ֱ��ɾ�������ֽڵ�����
        //        '-' : 'script style object iframe embed input select',
        //        'p': {$:{}},
        //        'br':{$:{}},
        //        'div':{'$':{}},
        //        'li':{'$':{}},
        //        'caption':transP,
        //        'th':transP,
        //        'tr':transP,
        //        'h1':transP,'h2':transP,'h3':transP,'h4':transP,'h5':transP,'h6':transP,
        //        'td':function(node){
        //            //û�����ݵ�tdֱ��ɾ��
        //            var txt = !!node.innerText();
        //            if(txt){
        //                node.parentNode.insertAfter(UE.uNode.createText(' &nbsp; &nbsp;'),node);
        //            }
        //            node.parentNode.removeChild(node,node.innerText())
        //        }
        //    }
        //}()

        //,allHtmlEnabled:false //�ύ����̨�������Ƿ��������html�ַ���

        //insertorderedlist
        //�����б����������,ֵ����ʱ֧�ֶ������Զ�ʶ��������ֵ�����Դ�ֵΪ׼
        //,'insertorderedlist':{
        //      //�Զ�����ʽ
        //        'num':'1,2,3...',
        //        'num1':'1),2),3)...',
        //        'num2':'(1),(2),(3)...',
        //        'cn':'һ,��,��....',
        //        'cn1':'һ),��),��)....',
        //        'cn2':'(һ),(��),(��)....',
        //     //ϵͳ�Դ�
        //     'decimal' : '' ,         //'1,2,3...'
        //     'lower-alpha' : '' ,    // 'a,b,c...'
        //     'lower-roman' : '' ,    //'i,ii,iii...'
        //     'upper-alpha' : '' , lang   //'A,B,C'
        //     'upper-roman' : ''      //'I,II,III...'
        //}

        //insertunorderedlist
        //�����б���������ã�ֵ����ʱ֧�ֶ������Զ�ʶ��������ֵ�����Դ�ֵΪ׼
        //,insertunorderedlist : { //�Զ�����ʽ
        //    'dash' :'�� ���ۺ�', //-���ۺ�
        //    'dot':' �� СԲȦ', //ϵͳ�Դ�
        //    'circle' : '',  // '�� СԲȦ'
        //    'disc' : '',    // '�� СԲ��'
        //    'square' : ''   //'�� С����'
        //}
        //,listDefaultPaddingLeft : '30'//Ĭ�ϵ���������Ļ�����
        //,listiconpath : 'http://bs.baidu.com/listicon/'//�Զ����ŵ�·��
        //,maxListLevel : 3 //���ƿ���tab�ļ���, ����-1Ϊ������

        //,autoTransWordToList:false  //��ֹword��ճ���������б��Զ�����б��ǩ

        //fontfamily
        //�������� label����֧�ֶ������Զ��л��������ã���������ֵΪ׼
        //,'fontfamily':[
        //    { label:'',name:'songti',val:'����,SimSun'},
        //    { label:'',name:'kaiti',val:'����,����_GB2312, SimKai'},
        //    { label:'',name:'yahei',val:'΢���ź�,Microsoft YaHei'},
        //    { label:'',name:'heiti',val:'����, SimHei'},
        //    { label:'',name:'lishu',val:'����, SimLi'},
        //    { label:'',name:'andaleMono',val:'andale mono'},
        //    { label:'',name:'arial',val:'arial, helvetica,sans-serif'},
        //    { label:'',name:'arialBlack',val:'arial black,avant garde'},
        //    { label:'',name:'comicSansMs',val:'comic sans ms'},
        //    { label:'',name:'impact',val:'impact,chicago'},
        //    { label:'',name:'timesNewRoman',val:'times new roman'}
        //]

        //fontsize
        //�ֺ�
        //,'fontsize':[10, 11, 12, 14, 16, 18, 20, 24, 36]

        //paragraph
        //�����ʽ ֵ����ʱ֧�ֶ������Զ�ʶ�������ã���������ֵΪ׼
        //,'paragraph':{'p':'', 'h1':'', 'h2':'', 'h3':'', 'h4':'', 'h5':'', 'h6':''}

        //rowspacingtop
        //�μ�� ֵ����ʾ��������ͬ
        //,'rowspacingtop':['5', '10', '15', '20', '25']

        //rowspacingBottom
        //�μ�� ֵ����ʾ��������ͬ
        //,'rowspacingbottom':['5', '10', '15', '20', '25']

        //lineheight
        //���ڼ�� ֵ����ʾ��������ͬ
        //,'lineheight':['1', '1.5','1.75','2', '3', '4', '5']

        //customstyle
        //�Զ�����ʽ����֧�ֹ��ʻ����˴�����ֵ���������ʾֵ
        //block��Ԫ�����������ö�����߼����õģ�inline��Ԫ������BIU���߼�����
        //����ʹ��һЩ���õı�ǩ
        //����˵��
        //tag ʹ�õı�ǩ����
        //label ��ʾ������Ҳ��������ʶ��ͬ���͵ı�ʶ����ע�����ֵÿ��Ҫ��ͬ��
        //style ��ӵ���ʽ
        //ÿһ���������һ���Զ������ʽ
        //,'customstyle':[
        //    {tag:'h1', name:'tc', label:'', style:'border-bottom:#ccc 2px solid;padding:0 4px 0 0;text-align:center;margin:0 0 20px 0;'},
        //    {tag:'h1', name:'tl',label:'', style:'border-bottom:#ccc 2px solid;padding:0 4px 0 0;margin:0 0 10px 0;'},
        //    {tag:'span',name:'im', label:'', style:'font-style:italic;font-weight:bold'},
        //    {tag:'span',name:'hi', label:'', style:'font-style:italic;font-weight:bold;color:rgb(51, 153, 204)'}
        //]

        //���Ҽ��˵�����
        //,enableContextMenu: true
        //�Ҽ��˵������ݣ����Բο�plugins/contextmenu.js��ߵ�Ĭ�ϲ˵������ӣ�label����֧�ֹ��ʻ��������Դ�����Ϊ׼
        //,contextMenu:[
        //    {
        //        label:'',       //��ʾ������
        //        cmdName:'selectall',//ִ�е�command������������Ҽ��˵�ʱ
        //        //exec��ѡ������exec�ͻ��ڵ��ʱִ�����function�����ȼ�����cmdName
        //        exec:function () {
        //            //this�ǵ�ǰ�༭����ʵ��
        //            //this.ui._dialogs['inserttableDialog'].open();
        //        }
        //    }
        //]

        //��ݲ˵�
        //,shortcutMenu:["fontfamily", "fontsize", "bold", "italic", "underline", "forecolor", "backcolor", "insertorderedlist", "insertunorderedlist"]

        //elementPathEnabled
        //�Ƿ�����Ԫ��·����Ĭ������ʾ
        //,elementPathEnabled : true

        //wordCount
        //,wordCount:true          //�Ƿ�������ͳ��
        //,maximumWords:10000       //���������ַ���
        //����ͳ����ʾ��{#count}����ǰ������{#leave}����������������ַ���,����֧�ֶ������Զ��л������򰴴�������ʾ
        //,wordCountMsg:''   //��ǰ������ {#count} ���ַ���������������{#leave} ���ַ�
        //��������������ʾ  ����֧�ֶ������Զ��л������򰴴�������ʾ
        //,wordOverFlowMsg:''    //<span style="color:red;">��������ַ������Ѿ������������ֵ�����������ܻ�ܾ����棡</span>

        //tab
        //���tab��ʱ�ƶ��ľ���,tabSize������tabNodeʲô�ַ���Ϊ��λ
        //,tabSize:4
        //,tabNode:'&nbsp;'

        //removeFormat
        //�����ʽʱ����ɾ���ı�ǩ������
        //removeForamtTags��ǩ
        //,removeFormatTags:'b,big,code,del,dfn,em,font,i,ins,kbd,q,samp,small,span,strike,strong,sub,sup,tt,u,var'
        //removeFormatAttributes����
        //,removeFormatAttributes:'class,style,lang,width,height,align,hspace,valign'

        //undo
        //���������˵Ĵ���,Ĭ��20
        //,maxUndoCount:20
        //��������ַ���������ֵʱ������һ���ֳ�
        //,maxInputCount:1

        //autoHeightEnabled
        // �Ƿ��Զ�����,Ĭ��true
        //,autoHeightEnabled:true

        //scaleEnabled
        //�Ƿ�������쳤��,Ĭ��true(������ʱ���Զ�����ʧЧ)
        //,scaleEnabled:false
        //,minFrameWidth:800    //�༭���϶�ʱ��С���,Ĭ��800
        //,minFrameHeight:220  //�༭���϶�ʱ��С�߶�,Ĭ��220

        //autoFloatEnabled
        //�Ƿ񱣳�toolbar��λ�ò���,Ĭ��true
        //,autoFloatEnabled:true
        //����ʱ��������������������ĸ߶ȣ�����ĳЩ���й̶�ͷ����ҳ��
        //,topOffset:30
        //�༭���ײ����빤�����߶�(����������ڵ��ڱ༭���߶ȣ���������Ч)
        //,toolbarTopOffset:400

        //����Զ��ͼƬ�Ƿ�ץȡ�����ر���
        //,catchRemoteImageEnable: true //�����Ƿ�ץȡԶ��ͼƬ

        //pageBreakTag
        //��ҳ��ʶ��,Ĭ����_ueditor_page_break_tag_
        //,pageBreakTag:'_ueditor_page_break_tag_'

        //autotypeset
        //�Զ��Ű����
        //,autotypeset: {
        //    mergeEmptyline: true,           //�ϲ�����
        //    removeClass: true,              //ȥ�������class
        //    removeEmptyline: false,         //ȥ������
        //    textAlign:"left",               //������Ű淽ʽ�������� left,right,center,justify ȥ��������Ա�ʾ��ִ���Ű�
        //    imageBlockLine: 'center',       //ͼƬ�ĸ�����ʽ����ռһ�о���,���Ҹ�����Ĭ��: center,left,right,none ȥ��������Ա�ʾ��ִ���Ű�
        //    pasteFilter: false,             //���ݹ������û��ճ������������
        //    clearFontSize: false,           //ȥ�����е���Ƕ�ֺţ�ʹ�ñ༭��Ĭ�ϵ��ֺ�
        //    clearFontFamily: false,         //ȥ�����е���Ƕ���壬ʹ�ñ༭��Ĭ�ϵ�����
        //    removeEmptyNode: false,         // ȥ���սڵ�
        //    //����ȥ���ı�ǩ
        //    removeTagNames: {��ǩ����:1},
        //    indent: false,                  // ��������
        //    indentValue : '2em',            //���������Ĵ�С
        //    bdc2sb: false,
        //    tobdc: false
        //}

        //tableDragable
        //����Ƿ������ק
        //,tableDragable: true



        //sourceEditor
        //Դ��Ĳ鿴��ʽ,codemirror �Ǵ��������textarea���ı���,Ĭ����codemirror
        //ע��Ĭ��codemirrorֻ����ie8+�ͷ�ie��ʹ��
        //,sourceEditor:"codemirror"
        //���sourceEditor��codemirror����������һ����������
        //codeMirrorJsUrl js���ص�·����Ĭ���� URL + "third-party/codemirror/codemirror.js"
        //,codeMirrorJsUrl:URL + "third-party/codemirror/codemirror.js"
        //codeMirrorCssUrl css���ص�·����Ĭ���� URL + "third-party/codemirror/codemirror.css"
        //,codeMirrorCssUrl:URL + "third-party/codemirror/codemirror.css"
        //�༭����ʼ����ɺ��Ƿ����Դ��ģʽ��Ĭ��Ϊ��
        //,sourceEditorFirst:false

        //iframeUrlMap
        //dialog���ݵ�·�� ���ᱻ�滻��URL,������һ���򿪣����������е�dialog��Ĭ��·��
        //,iframeUrlMap:{
        //    'anchor':'~/dialogs/anchor/anchor.html',
        //}

        //allowLinkProtocol ��������ӵ�ַ������Щǰ׺�����ӵ�ַ�����Զ����http
        //, allowLinkProtocols: ['http:', 'https:', '#', '/', 'ftp:', 'mailto:', 'tel:', 'git:', 'svn:']

        //webAppKey �ٶ�Ӧ�õ�APIkey��ÿ��վ����������ȥ�ٶȹ���ע��һ��key��������ʹ��app���ܣ�ע����ܣ�http://app.baidu.com/static/cms/getapikey.html
        //, webAppKey: ""

        //Ĭ�Ϲ��˹������������Ŀ
        //,disabledTableInTable:true  //��ֹ���Ƕ��
        //,allowDivTransToP:true      //�������༭����div��ǩ�Զ����p��ǩ
        //,rgb2Hex:true               //Ĭ�ϲ����������е�color�Զ���rgb��ʽ���16���Ƹ�ʽ

		// xss �����Ƿ���,inserthtml�Ȳ���
		,xssFilterRules: true
		//input xss����
		,inputXssFilter: true
		//output xss����
		,outputXssFilter: true
		// xss���˰����� ������Դ: https://raw.githubusercontent.com/leizongmin/js-xss/master/lib/default.js
		,whitList: {
			a:      ['target', 'href', 'title', 'class', 'style'],
			abbr:   ['title', 'class', 'style'],
			address: ['class', 'style'],
			area:   ['shape', 'coords', 'href', 'alt'],
			article: [],
			aside:  [],
			audio:  ['autoplay', 'controls', 'loop', 'preload', 'src', 'class', 'style'],
			b:      ['class', 'style'],
			bdi:    ['dir'],
			bdo:    ['dir'],
			big:    [],
			blockquote: ['cite', 'class', 'style'],
			br:     [],
			caption: ['class', 'style'],
			center: [],
			cite:   [],
			code:   ['class', 'style'],
			col:    ['align', 'valign', 'span', 'width', 'class', 'style'],
			colgroup: ['align', 'valign', 'span', 'width', 'class', 'style'],
			dd:     ['class', 'style'],
			del:    ['datetime'],
			details: ['open'],
			div:    ['class', 'style'],
			dl:     ['class', 'style'],
			dt:     ['class', 'style'],
			em:     ['class', 'style'],
			font:   ['color', 'size', 'face'],
			footer: [],
			h1:     ['class', 'style'],
			h2:     ['class', 'style'],
			h3:     ['class', 'style'],
			h4:     ['class', 'style'],
			h5:     ['class', 'style'],
			h6:     ['class', 'style'],
			header: [],
			hr:     [],
			i:      ['class', 'style'],
			img:    ['src', 'alt', 'title', 'width', 'height', 'id', '_src', 'loadingclass', 'class', 'data-latex'],
			ins:    ['datetime'],
			li:     ['class', 'style'],
			mark:   [],
			nav:    [],
			ol:     ['class', 'style'],
			p:      ['class', 'style'],
			pre:    ['class', 'style'],
			s:      [],
			section:[],
			small:  [],
			span:   ['class', 'style'],
			sub:    ['class', 'style'],
			sup:    ['class', 'style'],
			strong: ['class', 'style'],
			table:  ['width', 'border', 'align', 'valign', 'class', 'style'],
			tbody:  ['align', 'valign', 'class', 'style'],
			td:     ['width', 'rowspan', 'colspan', 'align', 'valign', 'class', 'style'],
			tfoot:  ['align', 'valign', 'class', 'style'],
			th:     ['width', 'rowspan', 'colspan', 'align', 'valign', 'class', 'style'],
			thead:  ['align', 'valign', 'class', 'style'],
			tr:     ['rowspan', 'align', 'valign', 'class', 'style'],
			tt:     [],
			u:      [],
			ul:     ['class', 'style'],
			video:  ['autoplay', 'controls', 'loop', 'preload', 'src', 'height', 'width', 'class', 'style']
		}
    };

    function getUEBasePath(docUrl, confUrl) {

        return getBasePath(docUrl || self.document.URL || self.location.href, confUrl || getConfigFilePath());

    }

    function getConfigFilePath() {

        var configPath = document.getElementsByTagName('script');

        return configPath[ configPath.length - 1 ].src;

    }

    function getBasePath(docUrl, confUrl) {

        var basePath = confUrl;


        if (/^(\/|\\\\)/.test(confUrl)) {

            basePath = /^.+?\w(\/|\\\\)/.exec(docUrl)[0] + confUrl.replace(/^(\/|\\\\)/, '');

        } else if (!/^[a-z]+:/i.test(confUrl)) {

            docUrl = docUrl.split("#")[0].split("?")[0].replace(/[^\\\/]+$/, '');

            basePath = docUrl + "" + confUrl;

        }

        return optimizationPath(basePath);

    }

    function optimizationPath(path) {

        var protocol = /^[a-z]+:\/\//.exec(path)[ 0 ],
            tmp = null,
            res = [];

        path = path.replace(protocol, "").split("?")[0].split("#")[0];

        path = path.replace(/\\/g, '/').split(/\//);

        path[ path.length - 1 ] = "";

        while (path.length) {

            if (( tmp = path.shift() ) === "..") {
                res.pop();
            } else if (tmp !== ".") {
                res.push(tmp);
            }

        }

        return protocol + res.join("/");

    }

    window.UE = {
        getUEBasePath: getUEBasePath
    };

})();
