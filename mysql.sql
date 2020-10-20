SET NAMES UTF8;
DROP DATABASE IF EXISTS epi;
CREATE DATABASE epi CHARSET=UTF8;
USE epi;
CREATE TABLE user (
    uid INT PRIMARY KEY AUTO_INCREMENT COMMENT '用户id',
    unick VARCHAR(20) NOT NULL DEFAULT '注册用户' COMMENT '用户昵称',
    uname VARCHAR(20) NOT NULL UNIQUE COMMENT '用户名',
    upassword VARCHAR(100) NOT NULL COMMENT '用户密码',
    address VARCHAR(50) COMMENT '用户地址'
);
INSERT INTO user VALUES(null,'管理员','admin',MD5('xing125112'),'浙江省杭州市');
CREATE TABLE goods (
    pid INT PRIMARY KEY AUTO_INCREMENT COMMENT '产品id',
    product VARCHAR(100) NOT NULL COMMENT '产品名称',
    pimg VARCHAR(500) NOT NULL COMMENT '产品图片',
    price INT NOT NULL COMMENT '产品价格',
    pdesc VARCHAR(300) NOT NULL COMMENT '产品描述'
);
INSERT INTO goods VALUES(null,'喜百适医疗医用外科口罩单只独立包装一次性医护专用外科口罩','assets/goodsimg/1.jpg',99,'【药监备案】【灭菌型】【医用外科标准】YY0469-2011。品牌直供品质保证医用外科口罩，可供医护人员使用。健康使用每一片。【外出必备】');
INSERT INTO goods VALUES(null,'【现货速发】聆懿一次性医用口罩透气成人通用内含熔喷布三层设计防护口罩医用','assets/goodsimg/2.jpg',199,'【药监备案】【灭菌型】【医用外科标准】YY0469-2011。品牌直供品质保证医用外科口罩，可供医护人员使用。健康使用每一片。【外出必备】');
INSERT INTO goods VALUES(null,'如喜一次性医用外科口罩独立包装医用口罩成人挂耳式无菌防细菌防飞沫传播防隔','assets/goodsimg/3.jpg',39,'【药监备案】【灭菌型】【医用外科标准】YY0469-2011。品牌直供品质保证医用外科口罩，可供医护人员使用。健康使用每一片。【外出必备】');
INSERT INTO goods VALUES(null,'50只装现货一次性口罩专卖三层防护防尘透气男女成人口罩批发 三层过滤(含熔喷','assets/goodsimg/4.jpg',52,'【药监备案】【灭菌型】【医用外科标准】YY0469-2011。品牌直供品质保证医用外科口罩，可供医护人员使用。健康使用每一片。【外出必备】');
INSERT INTO goods VALUES(null,'华灿无限医用外科口罩一次性医疗口罩三层透气一次性医用外科口罩 【华灿无限】','assets/goodsimg/5.jpg',19,'【药监备案】【灭菌型】【医用外科标准】YY0469-2011。品牌直供品质保证医用外科口罩，可供医护人员使用。健康使用每一片。【外出必备】');
INSERT INTO goods VALUES(null,'XAXR 口罩一次性医用口罩男女无纺布内里口罩防尘防细菌防柳絮防花粉骑行透气 50只/袋','assets/goodsimg/6.jpg',19,'【药监备案】【灭菌型】【医用外科标准】YY0469-2011。品牌直供品质保证医用外科口罩，可供医护人员使用。健康使用每一片。【外出必备】');
INSERT INTO goods VALUES(null,'暖骑士医用口罩 一次性医用口罩透气学生成人男女 熔喷布3层防护口罩 医用口罩50只','assets/goodsimg/7.jpg',43,'【药监备案】【灭菌型】【医用外科标准】YY0469-2011。品牌直供品质保证医用外科口罩，可供医护人员使用。健康使用每一片。【外出必备】');
INSERT INTO goods VALUES(null,'劲度 一次性医用口罩带熔喷层防护 蓝色三层 防粉尘飞沫透气男女通用成人口罩50只装','assets/goodsimg/8.jpg',8,'【药监备案】【灭菌型】【医用外科标准】YY0469-2011。品牌直供品质保证医用外科口罩，可供医护人员使用。健康使用每一片。【外出必备】');
INSERT INTO goods VALUES(null,'华豫医疗医用外科一次性口罩无菌级医用口罩挂耳式防细菌飞沫透气清薄三层防护医用隔离口罩（10片/包） 医用外科口罩-灭菌型-100片','assets/goodsimg/9.jpg',32,'【药监备案】【灭菌型】【医用外科标准】YY0469-2011。品牌直供品质保证医用外科口罩，可供医护人员使用。健康使用每一片。【外出必备】');
INSERT INTO goods VALUES(null,'振德（ZHENDE)口罩一次性医用口罩男女无纺布内里口罩防尘防柳絮防花粉骑行透气10只/包 浅蓝深蓝随机发','assets/goodsimg/10.jpg',71,'【药监备案】【灭菌型】【医用外科标准】YY0469-2011。品牌直供品质保证医用外科口罩，可供医护人员使用。健康使用每一片。【外出必备】');
INSERT INTO goods VALUES(null,'戴思（DAISI）一次性医用口罩透气轻薄成人3层医用口罩50只','assets/goodsimg/11.jpg',299,'【药监备案】【灭菌型】【医用外科标准】YY0469-2011。品牌直供品质保证医用外科口罩，可供医护人员使用。健康使用每一片。【外出必备】');
INSERT INTO goods VALUES(null,'【次日达 低至0.3/片】一次性医用防护口罩三层防护熔喷布透气成人口罩医用药监局备案可查 蓝色医用—50只【三层防护 中层熔喷布过滤】','assets/goodsimg/12.jpg',49,'【药监备案】【灭菌型】【医用外科标准】YY0469-2011。品牌直供品质保证医用外科口罩，可供医护人员使用。健康使用每一片。【外出必备】');
INSERT INTO goods VALUES(null,'绚康一次性口罩 非医用三层熔喷布防尘透气口鼻罩蓝色成人男女 200只一次性口罩（4*50只装/盒）','assets/goodsimg/13.jpg',51,'【药监备案】【灭菌型】【医用外科标准】YY0469-2011。品牌直供品质保证医用外科口罩，可供医护人员使用。健康使用每一片。【外出必备】');
INSERT INTO goods VALUES(null,'海氏海诺 一次性医用外科口罩 无菌三层外科灭菌口罩 50只独立包装（二类医疗器械）','assets/goodsimg/14.jpg',35,'【药监备案】【灭菌型】【医用外科标准】YY0469-2011。品牌直供品质保证医用外科口罩，可供医护人员使用。健康使用每一片。【外出必备】');
CREATE TABLE orders (
    oid INT PRIMARY KEY AUTO_INCREMENT COMMENT '订单id',
    odate BIGINT NOT NULL COMMENT '订单创建时间',
    ostate ENUM('未付款','下单成功','运输中','已完成') NOT NULL DEFAULT '未付款' COMMENT '订单状态',
    omoney INT NOT NULL COMMENT '订单金额',
    uid INT NOT NULL COMMENT '用户id',
    FOREIGN KEY (uid) REFERENCES user(uid)
);