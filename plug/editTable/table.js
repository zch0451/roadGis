function EditorTable($table,theadData,initData){
    this.$table=$table;
    this.theadData=theadData;
    this.data=initData||[];//存储内容
    this.init();
}
EditorTable.prototype={
    init:function(){
        var me=this;
        this.update();
        $('body').on('click','#addLine',function(){
            me.add();
        })
        $('body').on('click','.removLine',function(){
            var index=$(this).parent().parent().data('index');
            me.remove(index);
        })
        this.$table.on('blur','[contenteditable="true"]',function(){
            var index = $(this).parent().data('index');
            var val = $(this).html();
            var attr = $(this).attr('data-role');
            me.data[index][attr] = val;
        })
    },
    update:function(){
        var headTpl='<tr><td>'+this.theadData.join('</td><td>')+'</td></tr>';
        var addTpl='<tr>' +
            '<td colspan="'+this.theadData.length+'"><button class="layui-btn layui-btn-normal" id="addLine" type="button">增加</button></td>\n' +
            '</tr>'
        var tbody='';
        var me=this;
        this.data.forEach(function(item,index){
            var tr='<tr data-index="'+index+'">';
            for(var i=0;i<(me.theadData.length-1);i++){
                tr+="<td contenteditable='true' data-role='"+me.theadData[i]+"'>" + item[me.theadData[i]] + "</td>"
            }
            tr+="<td><button class='layui-btn layui-btn-danger layui-btn-sm removLine' type='button'>删除</button></td></tr>"
            tbody+=tr;
        })
        this.$table.html(headTpl+tbody+addTpl)
    },
    add:function(){
        var obj={};
        this.theadData.forEach(function(key){
            obj[key]='';
        })
        this.data.push(obj);
        this.update();
    },
    remove:function(index){
        this.data.splice(index,1);
        this.update();
    }
}
