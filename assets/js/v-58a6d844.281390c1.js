"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[35505],{106147:(e,i,t)=>{t.r(i),t.d(i,{data:()=>n});const n=JSON.parse('{"key":"v-58a6d844","path":"/devices/rtsc11r.html","title":"TuYa rtsc11r control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"TuYa rtsc11r control via MQTT","description":"Integrate your TuYa rtsc11r via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2023-09-28T10:54:36.000Z"},"excerpt":"","headers":[{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Presence (binary)","slug":"presence-binary","link":"#presence-binary","children":[]},{"level":3,"title":"Illuminance (numeric)","slug":"illuminance-numeric","link":"#illuminance-numeric","children":[]},{"level":3,"title":"Detection delay (numeric)","slug":"detection-delay-numeric","link":"#detection-delay-numeric","children":[]},{"level":3,"title":"Detection distance (numeric)","slug":"detection-distance-numeric","link":"#detection-distance-numeric","children":[]},{"level":3,"title":"Sensitivity (numeric)","slug":"sensitivity-numeric","link":"#sensitivity-numeric","children":[]},{"level":3,"title":"Keep time (numeric)","slug":"keep-time-numeric","link":"#keep-time-numeric","children":[]},{"level":3,"title":"Minimum range (numeric)","slug":"minimum-range-numeric","link":"#minimum-range-numeric","children":[]},{"level":3,"title":"Maximum range (numeric)","slug":"maximum-range-numeric","link":"#maximum-range-numeric","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1700163008000},"filePathRelative":"devices/rtsc11r.md"}')},260547:(e,i,t)=>{t.r(i),t.d(i,{default:()=>m});var n=t(166252);const a=(0,n._)("h1",{id:"tuya-rtsc11r",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#tuya-rtsc11r","aria-hidden":"true"},"#"),(0,n.Uk)(" TuYa rtsc11r")],-1),d=(0,n._)("thead",null,[(0,n._)("tr",null,[(0,n._)("th"),(0,n._)("th")])],-1),c=(0,n._)("tr",null,[(0,n._)("td",null,"Model"),(0,n._)("td",null,"rtsc11r")],-1),o=(0,n._)("td",null,"Vendor",-1),r=(0,n._)("tr",null,[(0,n._)("td",null,"Description"),(0,n._)("td",null,"5.8G human presence sensor with relay")],-1),l=(0,n._)("tr",null,[(0,n._)("td",null,"Exposes"),(0,n._)("td",null,"presence, illuminance, detection_delay, detection_distance, sensitivity, keep_time, minimum_range, maximum_range, linkquality")],-1),s=(0,n._)("tr",null,[(0,n._)("td",null,"Picture"),(0,n._)("td",null,[(0,n._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/rtsc11r.jpg",alt:"TuYa rtsc11r"})])],-1),u=(0,n.uE)('<h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="presence-binary" tabindex="-1"><a class="header-anchor" href="#presence-binary" aria-hidden="true">#</a> Presence (binary)</h3><p>Indicates whether the device detected presence. Value can be found in the published state on the <code>presence</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> presence is ON, if <code>false</code> OFF.</p><h3 id="illuminance-numeric" tabindex="-1"><a class="header-anchor" href="#illuminance-numeric" aria-hidden="true">#</a> Illuminance (numeric)</h3><p>Raw measured illuminance. Value can be found in the published state on the <code>illuminance</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>lx</code>.</p><h3 id="detection-delay-numeric" tabindex="-1"><a class="header-anchor" href="#detection-delay-numeric" aria-hidden="true">#</a> Detection delay (numeric)</h3><p>Detection delay. Value can be found in the published state on the <code>detection_delay</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;detection_delay&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>10</code>. The unit of this value is <code>s</code>.</p><h3 id="detection-distance-numeric" tabindex="-1"><a class="header-anchor" href="#detection-distance-numeric" aria-hidden="true">#</a> Detection distance (numeric)</h3><p>Distance of detected person. Value can be found in the published state on the <code>detection_distance</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>1000</code>. The unit of this value is <code>cm</code>.</p><h3 id="sensitivity-numeric" tabindex="-1"><a class="header-anchor" href="#sensitivity-numeric" aria-hidden="true">#</a> Sensitivity (numeric)</h3><p>Detection sensitivity. Value can be found in the published state on the <code>sensitivity</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;sensitivity&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>10</code>.</p><h3 id="keep-time-numeric" tabindex="-1"><a class="header-anchor" href="#keep-time-numeric" aria-hidden="true">#</a> Keep time (numeric)</h3><p>Detection keep time. Value can be found in the published state on the <code>keep_time</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;keep_time&quot;: NEW_VALUE}</code>. The minimal value is <code>5</code> and the maximum value is <code>3600</code>. The unit of this value is <code>s</code>.</p><h3 id="minimum-range-numeric" tabindex="-1"><a class="header-anchor" href="#minimum-range-numeric" aria-hidden="true">#</a> Minimum range (numeric)</h3><p>Minimum detection range. Value can be found in the published state on the <code>minimum_range</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;minimum_range&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>1000</code>. The unit of this value is <code>m</code>.</p><h3 id="maximum-range-numeric" tabindex="-1"><a class="header-anchor" href="#maximum-range-numeric" aria-hidden="true">#</a> Maximum range (numeric)</h3><p>Maximum detection range. Value can be found in the published state on the <code>maximum_range</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;maximum_range&quot;: NEW_VALUE}</code>. The minimal value is <code>50</code> and the maximum value is <code>1000</code>. The unit of this value is <code>m</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',19),h={},m=(0,t(983744).Z)(h,[["render",function(e,i){const t=(0,n.up)("RouterLink");return(0,n.wg)(),(0,n.iD)("div",null,[(0,n.kq)(" !!!! "),(0,n.kq)(" ATTENTION: This file is auto-generated through docgen! "),(0,n.kq)(' You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". '),(0,n.kq)(' Do not use h1 or h2 heading within "## Notes"-Section. '),(0,n.kq)(" !!!! "),a,(0,n._)("table",null,[d,(0,n._)("tbody",null,[c,(0,n._)("tr",null,[o,(0,n._)("td",null,[(0,n.Wm)(t,{to:"/supported-devices/#v=TuYa"},{default:(0,n.w5)((()=>[(0,n.Uk)("TuYa")])),_:1})])]),r,l,s])]),(0,n.kq)(' Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. '),(0,n.kq)(" Notes END: Do not edit below this line "),u])}]])}}]);