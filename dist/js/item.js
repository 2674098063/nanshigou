(()=>{let e=location.search.substr(1).replace(/[^\d.]/g,"");$.ajax({url:"api/01index.php",type:"post",data:{fangfa:"sortTab",tabna:"shangyi"},success:t=>{!function(t){let s=JSON.parse(t),a="",n=s.data.list;for(let t=0;t<n.length;t++)if(n[t].id==e){let e=n[t].imgurl.split("&");for(let t=0;t<e.length;t++)e[t]&&(a+=` <li>\n                        <img title="" src="${e[t]}" class="cloudzoom-gallery">\n                        </li>`);$(".container img").attr("src",e[0]),$(".controller ul").html(a),$(".ncs-goods-summary .name h1").html(n[t].name),document.title=n[t].name,$(".ncs-goods-summary .cost-price strong").html("￥"+n[t].marketPrice),$(".ncs-goods-summary .price strong").html("￥"+n[t].salePrice),$(".ncs-point span strong").html(n[t].stock),$(".ncs-info .title h4").html(n[t].store),$(".ncs-figure-input").on("mouseover",()=>{$(".ncs-point").css("display","block")}).on("mouseout",()=>{$(".ncs-point").css("display","none")});break}}(t)}})})();class loupe{constructor(e){this.def={magnifier:"",container:"",containerImg:"",view:"",moveView:"",thumbnail:"",index:0},Object.assign(this.def,e),this.init()}init(){$(this.def.container).on("mouseover",()=>{let e=$(this.def.container+"  img").attr("src");$(this.def.moveView).css("display","block"),$(this.def.view).css("display","block").ready(()=>{$(this.def.view).html('<img src="'+e+'" alt="">')})}).on("mousemove",e=>{var t=parseInt($(this.def.moveView).css("width")),s=parseInt($(this.def.moveView).css("height")),a=parseInt($(this.def.container).css("width")),n=parseInt($(this.def.container).css("height")),i=e.pageX-$(this.def.container).offset().left-t/2,r=e.pageY-$(this.def.container).offset().top-s/2;i<=0?i=0:i>=a-t&&(i=a-t),r<=0?r=0:r>=n-s&&(r=n-s);var o=-i/(a-t)*100,c=-r/(n-s)*100;$(this.def.moveView).css({left:i+"px",top:r+"px"}),$(this.def.view+"  img").css({left:o+"%",top:c+"%"})}).on("mouseout",()=>{$(this.def.moveView).css("display","none"),$(this.def.view).css("display","none")}),$(this.def.containerImg).on("mouseover",e=>{if("IMG"==e.target.tagName){let t=e.target.src;for(let e=1;e<=$(this.def.thumbnail).length;e++)$(this.def.thumbnail+":nth-child("+[e]+")").removeClass("current");e.target.parentNode.className="current",$(this.def.container+"  img").attr("src",t)}}),$(".ncs-key").on("click",e=>{if("A"==e.target.tagName){for(let t=0;t<e.target.parentNode.parentNode.children.length;t++)e.target.parentNode.parentNode.children[t].children[0].className="";e.target.className="hovered"}}),$(".ncs-figure-input a").on("click",e=>{let t=$(".ncs-point span strong").html();if("-"==e.target.innerHTML){let t=e.target.parentNode.children[0].value-1;t<=0&&(t=0),e.target.parentNode.children[0].value=t}if("+"==e.target.innerHTML){let s=1*e.target.parentNode.children[0].value+1;s>=t&&(s=t),e.target.parentNode.children[0].value=s}}),$(".ncs-figure-input #quantity").on("keyup",e=>{let t=$(".ncs-point span strong").html();e.keyCode>95&&e.keyCode<106?e.target.value>=t&&(e.target.value=t):(alert("请输入数字"),e.target.value=1)}),$(".ncs-buy .addcart").on("click",()=>{let e=location.search.substr(1).replace(/[^\d.]/g,""),t=$("#quantity").val();$.ajax({url:"api/01index.php",type:"post",data:{fangfa:"cart",tabna:"cart",id:e,gnum:t},success:e=>{JSON.parse(e)}})})}}