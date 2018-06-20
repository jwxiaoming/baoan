$(document).ready(function(){
    //载入头部
    var toubu ='<div class="header"> <div class="header_top"> <img src="img/logo.png" id="logo"> <p>成都市安保技术与服务协会</p> </div> <div class="title"> <a href="index.html">网站首页</a> <a href="index.html">加入收藏</a> <a href="index.html">联系我们</a> <form action="" method="post"> <input type="text" style="border-radius: 10px;width: 120px;"> <input type="submit" style="margin-left:5px;" value="站内搜索"> </form> </div> </div> <div class="nav"> <div class="menu"> <li> <a href="index.html">网站首页</a> </li> <li> <a href="xhgk.html">协会概况</a> </li> <li> <a href="tzgg.html">通知公告</a> </li> <li> <a href="xhsx.html">协会时讯</a> </li> <li> <a href="dzjs.html">党政建设</a> </li> <li> <a href="#">企业风貌</a> </li> <li> <a href="#">媒体宣传</a> </li> <li> <a href="#">信息公示</a> </li> <li> <a href="#">学习培训</a> </li> <li> <a href="#">创先争优</a> </li> <li> <a href="flfg.html">法律法规</a> </li> <li> <a href="#">会员服务</a> </li> <li> <a href="#">行业管理</a> </li> <li> <a href="#">行业研究</a> </li> <li> <a href="hydt.html">行业动态</a> </li> <li> <a href="#">行业监督</a> </li> <li> <a href="#">保安服务</a> </li> <li> <a href="#">安保技术</a> </li> <li> <a href=#">安防设备</a> </li> <li> <a href="#">等级评定</a> </li> <li> <a href="#">企业招聘</a> </li> <li> <a href="#">联系我们</a> </li> </div> </div>';

    $("#toubu").html(toubu);

    console.warn('头部已加载');

    //载入侧边栏
    var youce = '<div class="column3_1"><div class="column3_biaoti"><p id="gaikuang">协会概况</p></div><ul class="column3_tiao"><a href="xhgk.html" target="blank" class="button button-glow button-rounded button-raised button-primary" id="gaikuang_anniu">协会介绍</a><a href="xhzc.html" target="blank" class="button button-glow button-rounded button-raised button-primary" id="gaikuang_anniu">协会章程</a><a href="xhld.html" target="blank" class="button button-glow button-rounded button-raised button-primary" id="gaikuang_anniu">协会领导</a><a href="glzd.html" target="blank" class="button button-glow button-rounded button-raised button-primary" id="gaikuang_anniu">管理制度</a><a href="pages.html" target="blank" class="button button-glow button-rounded button-raised button-primary" id="gaikuang_anniu2">会员单位</a></ul><div class="column3_biaoti"><p id="hangye">行业管理</p></div><ul class="column3_tiao"><a href="pages.html" target="blank" id="yuan"><img src="img/icon1.png" ><span>行业研究</span></a><a href="pages.html" target="blank" id="yuan"><img src="img/icon2.png" ><span>行业监督</span></a><a href="pages.html" target="blank" id="yuan"><img src="img/icon3.png" ><span>等级评定</span></a><a href="pages.html" target="blank" id="yuan"><img src="img/icon4.png" ><span>学习培训</span></a></ul><div class="column3_biaoti"><p id="lianxi">联系我们</p><p id="lianxiwenzi">热线：13980765471<br>邮箱：stsams@163.com</p></div></div>'

    $('.column3').html(youce);

    console.warn('侧栏已加载');

    //载入尾部
    var weibu = '<div class="footer_nav"><div class="footer_nav_btn link1"><p style="border-right: 1px solid #ffffff;" id="footer_btn1">政府网站</p><ul class="link1_ul"><a href="http://www.chengdu.gov.cn/" target="_blank"><li>成都市政府</li></a><a href="http://www.gaj.chengdu.gov.cn/" target="_blank"><li>成都市公安局</li></a><a href="http://cdmzj.chengdu.gov.cn/" target="_blank"><li>成都市民政局</li></a><a href="http://www.mps.gov.cn/" target="_blank"><li>公安部</li></a></ul></div><div class="footer_nav_btn link2"><p style="border-right: 1px solid #ffffff;" id="footer_btn2">行业协会网站</p><ul class="link2_ul"><a href="http://www.zgba.org/" target="_blank"><li>中国保安协会</li></a><a href="http://www.scsbaxh.com/" target="_blank"><li>四川保安协会</li></a><a href="#" target="_blank"><li>成都市保安协会</li></a></ul></div><div class="footer_nav_btn link3"><p style="border-right: 1px solid #ffffff;" id="footer_btn3">会员单位网站</p><ul class="link3_ul"><a href="#" target="_blank"><li>测试</li></a><a href="#" target="_blank"><li>测试</li></a><a href="#" target="_blank"><li>测试</li></a><a href="#" target="_blank"><li>测试</li></a><a href="#" target="_blank"><li>测试</li></a></ul></div><div class="footer_nav_btn link4"><p id="footer_btn4">其他网站</p><ul class="link4_ul"><a href="http://www.people.com.cn/" target="_blank"><li>人民网</li></a><a href="http://www.xinhuanet.com/" target="_blank"><li>新华网</li></a><a href="http://www.legaldaily.com.cn/" target="_blank"><li>法制网</li></a><a href="http://www.chengdu.cn/" target="_blank"><li>成都新闻网</li></a><a href="http://www.newssc.org/" target="_blank"><li>成都商报</li></a><a href="https://e.thecover.cn/shtml/index_hxdsb.shtml" target="_blank"><li>华西都市报</li></a></ul></div></div><div><img src="img/logo.png" id="logo2"><p>版权所有©️成都市安保技术与服务协会</p><p>主管：成都市公安局&nbsp;&nbsp;&nbsp;&nbsp;主办：成都市安保技术与服务协会&nbsp;&nbsp;&nbsp;&nbsp;</p><p>地址：成都市天府大道北段1700号附134号环球中心S1区S8楼1327号</p></div>';

    $('.footer').html(weibu);

    $('.link1').hover(function(){
        $('.link1_ul').show();
    },function(){
        $('.link1_ul').hide();
    });
    
    $('.link2').hover(function(){
        $('.link2_ul').show();
    },function(){
        $('.link2_ul').hide();
    });
    
    $('.link3').hover(function(){
        $('.link3_ul').show();
    },function(){
        $('.link3_ul').hide();
    });
    
    $('.link4').hover(function(){
        $('.link4_ul').show();
    },function(){
        $('.link4_ul').hide();
    });

    console.warn('尾部已加载');

    //载入二维码
    var qrcode = "<div style='position:fixed;right:2%;bottom:3%;text-shadow: 2px 1px 20px;'><img src='img/qrcode.jpg' style='width:120px;border-radius:10px;box-shadow: -1px 2px 11px #00000042;'><p style='font-size:12px;text-align:center;line-height:20px;color:white;letter-spacing:6px;margin:5 auto;'>扫描上方二维码<br>关注微信公众号</p></div>"

    $("body").append(qrcode);

    console.warn('二维码已载入');

});