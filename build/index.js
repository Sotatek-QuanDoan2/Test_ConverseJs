converse.initialize({bosh_service_url:"https://conversejs.org/http-bind/",show_controlbox_by_default:!0,whitelisted_plugins:["myplugin"],view_mode:"embedded"}),converse.plugins.add("myplugin",{initialize:function(){this._converse.api.listen.on("messageSend",(e=>{alert(e.attributes.message)}))}});