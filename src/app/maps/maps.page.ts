import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { AlertController } from "@ionic/angular";
import { mapChildrenIntoArray } from "@angular/router/src/url_tree";
declare var AMap;
@Component({
  selector: "app-maps",
  templateUrl: "./maps.page.html",
  styleUrls: ["./maps.page.scss"]
})
export class MapsPage implements OnInit {
  @ViewChild("map_container") map_container: ElementRef;

  map: any; // 地图对象
  constructor(public alertController: AlertController) {}

  ngOnInit() {}

  ionViewDidEnter() {
    this.map = new AMap.Map(this.map_container.nativeElement, {
      view: new AMap.View2D({
        // 创建地图二维视口
        zoom: 15, // 设置地图缩放级别
        rotateEnable: true,
        showBuildingBlock: true
        // scrollWheel: true
      })
    });

    // 创建坐标点
    /**
     * Marker 常用属性
     * 名称                说明
     * position     	在地图上标记位置的经纬度值。必填参数
     * title          点标记的标题
     * snippet        点标记的内容
     * draggable      点标记是否可拖拽
     * visible        点标记是否可见
     * anchor         点标记的锚点
     * alpha          点的透明度
     */
    const marker = new AMap.Marker({
      position: this.map.getCenter(),
      draggable: true,
      // position: new AMap.LngLat(116.39, 39.9), // 经纬度对象，也可以是经纬度构成的一维数组[116.39, 39.9]
      title: "北京",
      icon: "../assets/icon/人_头像.png",
    });
    // 添加坐标点到地图
    this.map.add(marker);

    AMap.plugin(["AMap.ToolBar", "AMap.Scale", "AMap.OverView"], function() {
      this.map.addControl(new AMap.ToolBar());
    });
  }
}
