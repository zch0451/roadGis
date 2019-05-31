layui.use(['form', 'layer', 'laydate','tree'], function () {
    var form = layui.form;
    var layer = layui.layer;
    var laydate = layui.laydate;
    //音视会议选人
    var vedioSelect1=new PeopleSelect($('#people-select1'),[],form);
    var vedioSelect2=new PeopleSelect($('#people-select2'),[],form);
    $('#addPeople').click(function(){
        var data=vedioSelect1.getChecked();
        vedioSelect2.addData(data);
    })
    $('#removePeople').click(function(){
        vedioSelect2.removeData();

    })
    laydate.render({
        elem: '.date' //指定元素
    });
    layui.tree({
        elem: '#organization-tree' //传入元素选择器
        ,nodes: [{ //节点
            name: '天翼'
            ,children: [{
                name: '社会治理事业部',
                people:[{id:1,label:'A'},{id:2,label:'B'}]
            },{
                name: '城市管理事业部',
                people:[{id:3,label:'C'},{id:4,label:'D'}]
            }]
        }],
        click: function(node){
        console.log(node) //node即为当前点击的节点数据
            if(vedioSelect1){
                var data=node.people||[];
                vedioSelect1.setData(node.people)
            }
    }
});
});
(function () {
    $("#page").paging({
        pageNum: 1, // 当前页面
        totalNum: 9, // 总页码
        totalList: 63, // 记录总数量
        callback: function (num) { //回调函数
            console.log(num);
        }
    });
    $("#steps").step({
        stepNames: ['发布', '部署', '跟踪', '完成'], // 每步操作的名称
        initStep: 1 // 初始显示的步骤
    })

    //tagsinput
    $('.tags').tagsInput();
    $('.console-box>.mark').click(function () {
        if ($(this).parent().hasClass('close')) {
            $(this).parent().removeClass('close');
        } else {
            $(this).parent().addClass('close');
        }
    })
    $('.panel-toggle').click(function () {
        if ($(this).parent().hasClass('close')) {
            $(this).parent().removeClass('close');
        } else {
            $(this).parent().addClass('close');
        }
    })
    $('#steps').on('click','li',function(){
        var index=+$(this).index()+1;
        $('#steps').step("goto", index);
        $('#step'+index).removeClass('hide').siblings().addClass('hide');
    })
    $('.modal-close').click(function(){
        $(this).parents('.modal').hide()
    })
    $('.next').click(function(){
        $('#steps').step("next");
        $('.modal-card').scrollTop(0)
    })
    $('.modal-toggle').click(function(){
        var target=$(this).data('target');
        $(target).show();
    })
})();
var editorTable1 = new EditorTable($('#jysb'), ["设备名称", '数量', '设备所在地', '负责人', '联系电话'], [{
    "设备名称": "移动照明升降泛光灯",
    "数量": 1,
    "设备所在地": "A仓",
    "负责人": "王勇",
    "联系电话":15757778888
}])
var editorTable2 = new EditorTable($('#jywz'), ["物资名称", '数量', '物资所在地', '负责人', '联系电话'],[{
    "物资名称": "气动抛绳器",
    "数量": 5,
    "物资所在地": "A仓",
    "负责人": "王勇",
    "联系电话":15757778888
}])

