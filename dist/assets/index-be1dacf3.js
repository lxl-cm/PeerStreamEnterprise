import{B as N}from"./index-20432540.js";import{M as V,_ as A}from"./关闭-07a4db5f.js";import{_ as F}from"./index-8e434ec2.js";import{S as T,_ as O}from"./index-4917c236.js";import{U as y,F as R,I as E,_ as L}from"./user-33ed915c.js";import{_ as K,o as r,b as f,d,e as t,w as n,f as h,J as g,K as x,L as U,C as b,M as k,D as P,E as z}from"./index-ff77ca57.js";import"./Overflow-feb0de69.js";import"./LeftOutlined-bb68b96b.js";const Q={data(){return{modalTitle:"",open:!1,data:[],selectedValue:1,machineip:"",selectedRows:[],selectedRowKeys:[],gpusAdd:[],serverInfo:{cpuusage:"",gpuinfo:[],machineip:"",totalmemory:"",usedmemory:""},gpuInfo:{index:"",name:"",totalMemory:"",usedMemory:""},columns:[{title:"序号",dataIndex:"index",key:"index"},{title:"IP地址",dataIndex:"ip",key:"ip"},{title:"显卡-显存",dataIndex:"gpu",key:"gpu",slots:{customRender:"gpucard"}},{title:"操作",dataIndex:"operation",key:"operation"}],rowSelection:{onChange:(a,e)=>{this.selectedRows=e,this.selectedRowKeys=a}}}},mounted(){y.GetMachineInfo().then(a=>{this.data=a.data.machine,this.data.forEach((e,u)=>{e.index=u+1,e.gpu.forEach((v,o)=>{v.index=o+1})}),console.log(this.data)})},methods:{QueryInfo(a){console.log(a),y.GetMachineRate({machineip:a}).then(e=>{console.log(e),e.data.status=="0"&&(this.open=!0,this.modalTitle="服务器详情",this.serverInfo=e.data,this.serverInfo.gpuinfo.forEach((u,v)=>{u.index=v+1,u.usedMemory=(u.usedMemory/1024).toFixed(2),u.totalMemory=(u.totalMemory/1024).toFixed(2)}),this.serverInfo.cpuusage=(this.serverInfo.cpuusage*100).toFixed(2)+"%",this.serverInfo.totalmemory=(this.serverInfo.totalmemory/1024/1024/1024).toFixed(2),this.serverInfo.usedmemory=(this.serverInfo.usedmemory/1024/1024/1024).toFixed(2),this.gpuInfo=this.serverInfo.gpuinfo[0],this.selectedValue=1)})},DeleteSingle(a){var e=this.data.findIndex(u=>u.ip==a);this.data.splice(e,1),y.UpdateMachineInfo({machine:this.data})},DeleteMulti(){this.data=this.data.filter(a=>this.selectedRowKeys.includes(a.index)==!1),y.UpdateMachineInfo({machine:this.data})},OpenDialog(){this.modalTitle="新增服务器",this.open=!0,this.serverInfo={},this.gpuInfo=[],this.selectedValue=null,this.gpusAdd=[]},DeleteGpu(a){this.gpusAdd.splice(a,1)},handleOk(){if(this.modalTitle=="新增服务器"){var a=[];this.gpusAdd.forEach(e=>a.push({gpucard:a.length,gpumemory:e.GpuMemory})),this.data.push({ip:this.machineip,gpu:a,index:this.data.length+1}),console.log(this.data),y.UpdateMachineInfo({machine:this.data}).then(e=>{console.log(e)})}this.open=!1},handleCancel(){this.open=!1},handleChange(a){this.gpuInfo=this.serverInfo.gpuinfo.find(e=>e.index==a),console.log(this.gpuInfo)},addGpu(){this.gpusAdd.push({NameLabel:"显卡"+(this.gpusAdd.length+1)+"型号",Name:"",GpuLabel:"显卡"+(this.gpusAdd.length+1)+"显存",GpuMemory:""})}}},G=a=>(P("data-v-27a28bf2"),a=a(),z(),a),J={style:{height:"100%"}},j={class:"top",style:{display:"flex",height:"100px",width:"100%","background-color":"#1B1B1B"}},q={style:{width:"60%","padding-top":"30px"}},H={style:{"padding-top":"30px"}},W={class:"content",style:{"background-color":"#1B1B1B","margin-top":"30px","padding-top":"30px","padding-left":"40px",height:"calc(100% - 130px)"}},X={class:"split-cell"},Y=["onClick"],Z=["onClick"],$=G(()=>d("img",{src:A,alt:"Close"},null,-1)),ee=["onClick"],te=G(()=>d("div",null,null,-1));function le(a,e,u,v,o,p){const i=E,s=L,C=T,M=O,I=R,_=N,S=F,B=V;return r(),f("div",J,[d("div",j,[d("div",q,[t(I,{"label-col":{span:14},layout:"horizontal","wrapper-col":{span:10},style:{color:"white",width:"80%",display:"flex"}},{default:n(()=>[t(s,{label:"服务器名称"},{default:n(()=>[t(i)]),_:1}),t(s,{label:"IP地址"},{default:n(()=>[t(i)]),_:1}),t(s,{label:"状态"},{default:n(()=>[t(M,{style:{width:"80px"}},{default:n(()=>[t(C,{key:"",value:""})]),_:1})]),_:1})]),_:1})]),d("div",H,[t(_,{type:"primary"},{default:n(()=>[h(" 查询")]),_:1}),t(_,{type:"primary",ghost:"",style:{"margin-left":"10px"}},{default:n(()=>[h(" 重置")]),_:1})])]),d("div",W,[t(_,{type:"primary",onClick:p.OpenDialog},{default:n(()=>[h(" 新增")]),_:1},8,["onClick"]),t(_,{type:"primary",ghost:"",style:{"margin-left":"10px"},onClick:p.DeleteMulti},{default:n(()=>[h(" 删除")]),_:1},8,["onClick"]),t(S,{style:{height:"100%","margin-top":"20px"},columns:o.columns,dataSource:o.data,rowSelection:o.rowSelection,rowKey:"index",pagination:{pageSize:5}},{gpucard:n(({text:l,record:c,index:m,column:oe})=>[d("div",X,[(r(!0),f(g,null,x(c.gpu,(w,D)=>(r(),f("div",{key:D},k(w.gpucard)+" - "+k(w.gpumemory)+" G ",1))),128))])]),bodyCell:n(({column:l,record:c})=>[l.dataIndex=="operation"?(r(),f(g,{key:0},[d("a",{onClick:m=>p.QueryInfo(c.ip)},"查看",8,Y),d("a",{onClick:m=>p.DeleteSingle(c.ip),style:{"margin-left":"8px"}},"删除",8,Z)],64)):U("",!0)]),_:1},8,["columns","dataSource","rowSelection"])]),d("div",null,[t(B,{visible:o.open,"onUpdate:visible":e[8]||(e[8]=l=>o.open=l),mask:"",onOk:p.handleOk,onCancel:p.handleCancel,title:o.modalTitle},{closeIcon:n(()=>[$]),default:n(()=>[o.modalTitle=="服务器详情"?(r(),b(I,{key:0,"label-col":{span:6},"wrapper-col":{span:12}},{default:n(()=>[t(s,{label:"服务器IP"},{default:n(()=>[t(i,{value:o.serverInfo.machineip,"onUpdate:value":e[0]||(e[0]=l=>o.serverInfo.machineip=l),readonly:""},null,8,["value"])]),_:1}),t(s,{label:"CPU使用率"},{default:n(()=>[t(i,{value:o.serverInfo.cpuusage,"onUpdate:value":e[1]||(e[1]=l=>o.serverInfo.cpuusage=l),readonly:""},null,8,["value"])]),_:1}),t(s,{label:"显卡"},{default:n(()=>[t(M,{onChange:p.handleChange,value:o.selectedValue,"onUpdate:value":e[2]||(e[2]=l=>o.selectedValue=l)},{default:n(()=>[(r(!0),f(g,null,x(o.serverInfo.gpuinfo,l=>(r(),b(C,{key:l.index,value:l.index},{default:n(()=>[h(k(l.name),1)]),_:2},1032,["value"]))),128))]),_:1},8,["onChange","value"])]),_:1}),t(s,{label:"显存(G)"},{default:n(()=>[t(i,{value:o.gpuInfo.totalMemory,"onUpdate:value":e[3]||(e[3]=l=>o.gpuInfo.totalMemory=l),readonly:""},null,8,["value"])]),_:1}),t(s,{label:"已使用显存(G)"},{default:n(()=>[t(i,{value:o.gpuInfo.usedMemory,"onUpdate:value":e[4]||(e[4]=l=>o.gpuInfo.usedMemory=l),readonly:""},null,8,["value"])]),_:1}),t(s,{label:"总内存(G)"},{default:n(()=>[t(i,{value:o.serverInfo.totalmemory,"onUpdate:value":e[5]||(e[5]=l=>o.serverInfo.totalmemory=l),readonly:""},null,8,["value"])]),_:1}),t(s,{label:"已使用内存(G)"},{default:n(()=>[t(i,{value:o.serverInfo.usedmemory,"onUpdate:value":e[6]||(e[6]=l=>o.serverInfo.usedmemory=l),readonly:""},null,8,["value"])]),_:1})]),_:1})):o.modalTitle=="新增服务器"?(r(),b(I,{key:1,"label-col":{span:6},"wrapper-col":{span:12}},{default:n(()=>[t(s,{label:"服务器IP"},{default:n(()=>[t(i,{value:o.machineip,"onUpdate:value":e[7]||(e[7]=l=>o.machineip=l)},null,8,["value"])]),_:1}),(r(!0),f(g,null,x(o.gpusAdd,(l,c)=>(r(),f("div",{key:c},[t(s,{label:l.NameLabel},{default:n(()=>[t(i,{value:l.Name,"onUpdate:value":m=>l.Name=m},null,8,["value","onUpdate:value"])]),_:2},1032,["label"]),t(s,{label:l.GpuLabel,style:{display:"flex"}},{default:n(()=>[t(i,{value:l.GpuMemory,"onUpdate:value":m=>l.GpuMemory=m},null,8,["value","onUpdate:value"]),d("a",{type:"link",style:{"margin-left":"80%","font-size":"16px"},onClick:m=>p.DeleteGpu(c)},"删除",8,ee)]),_:2},1032,["label"]),te]))),128)),t(_,{type:"primary",ghost:"",onClick:p.addGpu},{default:n(()=>[h("添加显卡")]),_:1},8,["onClick"])]),_:1})):U("",!0)]),_:1},8,["visible","onOk","onCancel","title"])])])}const ce=K(Q,[["render",le],["__scopeId","data-v-27a28bf2"]]);export{ce as default};