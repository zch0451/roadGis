function PeopleSelect($container,data,form){
    this.$container=$container;
    this.data=data||[];
    this.dataId=[];
    this.form=form;//layui
    this.init();
}
PeopleSelect.prototype={
    init:function(){
        this.update();
    },
    update:function(){
        this.dataId=[];
        var tpl='';
        var me=this;
        this.data.forEach(function(item){
            tpl+='<div class="layui-form-item">\n' +
                '                                <input type="checkbox" name="" title="'+item.label+'" lay-skin="primary" data-id="'+item.id+'">\n' +
                '                            </div>'
            me.dataId.push(item.id);
        })
        this.$container.html(tpl);
        this.form.render();
    },
    setData:function (data) {
        this.data=data;
        this.update();
    },
    getChecked:function(){
        var newData=[];
        this.$container.find(':checked').each(function(index,item){
            console.log(item);
            newData.push({
                id:$(item).data('id'),
                label:$(item).attr('title')
            })
        })
        return newData;
    },
    addData:function(data){
       var len=data.length;
       for(var i=len-1;i>=0;i--){
           if(this.dataId.indexOf(data[i].id)>-1){
               data.splice(i,1);
           }
       }
        this.data=this.data.concat(data);
        this.update()
    },
    removeData:function(){
        var checkList=[];
        var newData=[];
        this.$container.find(':checked').each(function(index,item){
            console.log(item);
            checkList.push($(item).data('id'));
        })
        this.data.forEach(function(item){
            if(checkList.indexOf(item.id)<0){
                newData.push(item);
            }
        })
        this.data=newData;
        this.update();
    }
}
