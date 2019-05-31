var setting = {
    view: {
        addHoverDom: false,
        removeHoverDom: false,
        selectedMulti: false
    },
    check: {
        enable: true,
        chkboxType: { "N": "ps", "Y": "ps" },//子节点（s），父节点（p）；('Y','N'是否选中)
    },
    data: {
        simpleData: {
            enable: true
        }
    },
    edit: {
        enable: false
    },
    callback:{
        onCheck: zTreeOnCheck,
        onclick:function(e){
            e.preventDefault();
            return false
        }
    }
};
var zNodes =[
    {id:1, pId:0, name:"资源图层", open:true},
    {id:101, pId:1, name:"实时突发事件",checked:true,mark:'sstfsj'},
    {id:102, pId:1, name:"在途应急物资", mark:'ztyjwz'},
    {id:103, pId:1, name:"应急救援队伍", mark:'yjjydw'},
    {id:104, pId:1, name:"应急专家",mark:'yjzj'},
    {id:2, pId:0, name:"感知图层", open:true},
    {id:201, pId:2, name:"卡口监控", mark:'kkjk'},
    {id:202, pId:2, name:"车载监控",mark:'czkk'},
    {id:203, pId:2, name:"运输车辆监控",mark:'yscljk'},
    {id:3, pId:0, name:"感知图层", open:true},
    {id:301, pId:3, name:"应急装备工作状态预警", mark:'kkjk'},
    {id:302, pId:3, name:"应急装备油耗预警",mark:'czkk'},
    {id:303, pId:3, name:"运输车辆事件预警",mark:'yscljk'},
    {id:304, pId:3, name:"运输车辆油耗预警",mark:'yscljk'}
];
function zTreeOnCheck(event, treeId, treeNode) {
    if(treeNode.mark){
        i_bm_setMarksVisible(treeNode.mark,treeNode.checked)
    }else{
        treeNode.name=="资源图层"?i_bm_setVisible_zytc(treeNode.checked):i_bm_setVisible_gztc(treeNode.checked);
    }
}
$(document).ready(function(){
    var zTree=$.fn.zTree.init($("#tree"), setting, zNodes);
});
