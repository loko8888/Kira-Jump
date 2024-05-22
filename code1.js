gdjs.PlayZoneCode = {};
gdjs.PlayZoneCode.GDKiraObjects1= [];
gdjs.PlayZoneCode.GDKiraObjects2= [];
gdjs.PlayZoneCode.GDKiraObjects3= [];
gdjs.PlayZoneCode.GDKiraObjects4= [];
gdjs.PlayZoneCode.GDKiraObjects5= [];
gdjs.PlayZoneCode.GDDeathZoneObjects1= [];
gdjs.PlayZoneCode.GDDeathZoneObjects2= [];
gdjs.PlayZoneCode.GDDeathZoneObjects3= [];
gdjs.PlayZoneCode.GDDeathZoneObjects4= [];
gdjs.PlayZoneCode.GDDeathZoneObjects5= [];
gdjs.PlayZoneCode.GDPlatformObjects1= [];
gdjs.PlayZoneCode.GDPlatformObjects2= [];
gdjs.PlayZoneCode.GDPlatformObjects3= [];
gdjs.PlayZoneCode.GDPlatformObjects4= [];
gdjs.PlayZoneCode.GDPlatformObjects5= [];
gdjs.PlayZoneCode.GDBoostObjects1= [];
gdjs.PlayZoneCode.GDBoostObjects2= [];
gdjs.PlayZoneCode.GDBoostObjects3= [];
gdjs.PlayZoneCode.GDBoostObjects4= [];
gdjs.PlayZoneCode.GDBoostObjects5= [];
gdjs.PlayZoneCode.GDScoretextObjects1= [];
gdjs.PlayZoneCode.GDScoretextObjects2= [];
gdjs.PlayZoneCode.GDScoretextObjects3= [];
gdjs.PlayZoneCode.GDScoretextObjects4= [];
gdjs.PlayZoneCode.GDScoretextObjects5= [];
gdjs.PlayZoneCode.GDBGObjects1= [];
gdjs.PlayZoneCode.GDBGObjects2= [];
gdjs.PlayZoneCode.GDBGObjects3= [];
gdjs.PlayZoneCode.GDBGObjects4= [];
gdjs.PlayZoneCode.GDBGObjects5= [];
gdjs.PlayZoneCode.GDLEFTObjects1= [];
gdjs.PlayZoneCode.GDLEFTObjects2= [];
gdjs.PlayZoneCode.GDLEFTObjects3= [];
gdjs.PlayZoneCode.GDLEFTObjects4= [];
gdjs.PlayZoneCode.GDLEFTObjects5= [];
gdjs.PlayZoneCode.GDRIGHTObjects1= [];
gdjs.PlayZoneCode.GDRIGHTObjects2= [];
gdjs.PlayZoneCode.GDRIGHTObjects3= [];
gdjs.PlayZoneCode.GDRIGHTObjects4= [];
gdjs.PlayZoneCode.GDRIGHTObjects5= [];
gdjs.PlayZoneCode.GDCandleObjects1= [];
gdjs.PlayZoneCode.GDCandleObjects2= [];
gdjs.PlayZoneCode.GDCandleObjects3= [];
gdjs.PlayZoneCode.GDCandleObjects4= [];
gdjs.PlayZoneCode.GDCandleObjects5= [];
gdjs.PlayZoneCode.GDBroken_9595PlatformObjects1= [];
gdjs.PlayZoneCode.GDBroken_9595PlatformObjects2= [];
gdjs.PlayZoneCode.GDBroken_9595PlatformObjects3= [];
gdjs.PlayZoneCode.GDBroken_9595PlatformObjects4= [];
gdjs.PlayZoneCode.GDBroken_9595PlatformObjects5= [];
gdjs.PlayZoneCode.GDExplosion3Objects1= [];
gdjs.PlayZoneCode.GDExplosion3Objects2= [];
gdjs.PlayZoneCode.GDExplosion3Objects3= [];
gdjs.PlayZoneCode.GDExplosion3Objects4= [];
gdjs.PlayZoneCode.GDExplosion3Objects5= [];
gdjs.PlayZoneCode.GDMiddleObjects1= [];
gdjs.PlayZoneCode.GDMiddleObjects2= [];
gdjs.PlayZoneCode.GDMiddleObjects3= [];
gdjs.PlayZoneCode.GDMiddleObjects4= [];
gdjs.PlayZoneCode.GDMiddleObjects5= [];
gdjs.PlayZoneCode.GDAngle_959515_9595RIGHTObjects1= [];
gdjs.PlayZoneCode.GDAngle_959515_9595RIGHTObjects2= [];
gdjs.PlayZoneCode.GDAngle_959515_9595RIGHTObjects3= [];
gdjs.PlayZoneCode.GDAngle_959515_9595RIGHTObjects4= [];
gdjs.PlayZoneCode.GDAngle_959515_9595RIGHTObjects5= [];
gdjs.PlayZoneCode.GDAngle_959545_9595RIGHTObjects1= [];
gdjs.PlayZoneCode.GDAngle_959545_9595RIGHTObjects2= [];
gdjs.PlayZoneCode.GDAngle_959545_9595RIGHTObjects3= [];
gdjs.PlayZoneCode.GDAngle_959545_9595RIGHTObjects4= [];
gdjs.PlayZoneCode.GDAngle_959545_9595RIGHTObjects5= [];
gdjs.PlayZoneCode.GDAngle_959515_9595LEFTObjects1= [];
gdjs.PlayZoneCode.GDAngle_959515_9595LEFTObjects2= [];
gdjs.PlayZoneCode.GDAngle_959515_9595LEFTObjects3= [];
gdjs.PlayZoneCode.GDAngle_959515_9595LEFTObjects4= [];
gdjs.PlayZoneCode.GDAngle_959515_9595LEFTObjects5= [];
gdjs.PlayZoneCode.GDAngle_959545_9595LEFTObjects1= [];
gdjs.PlayZoneCode.GDAngle_959545_9595LEFTObjects2= [];
gdjs.PlayZoneCode.GDAngle_959545_9595LEFTObjects3= [];
gdjs.PlayZoneCode.GDAngle_959545_9595LEFTObjects4= [];
gdjs.PlayZoneCode.GDAngle_959545_9595LEFTObjects5= [];
gdjs.PlayZoneCode.GDShurikenObjects1= [];
gdjs.PlayZoneCode.GDShurikenObjects2= [];
gdjs.PlayZoneCode.GDShurikenObjects3= [];
gdjs.PlayZoneCode.GDShurikenObjects4= [];
gdjs.PlayZoneCode.GDShurikenObjects5= [];


gdjs.PlayZoneCode.asyncCallback13936252 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("Explosion3"), gdjs.PlayZoneCode.GDExplosion3Objects2);

{for(var i = 0, len = gdjs.PlayZoneCode.GDExplosion3Objects2.length ;i < len;++i) {
    gdjs.PlayZoneCode.GDExplosion3Objects2[i].stopEmission();
}
}}
gdjs.PlayZoneCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
for (const obj of gdjs.PlayZoneCode.GDExplosion3Objects1) asyncObjectsList.addObject("Explosion3", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.15), (runtimeScene) => (gdjs.PlayZoneCode.asyncCallback13936252(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.PlayZoneCode.eventsList1 = function(runtimeScene) {

};gdjs.PlayZoneCode.mapOfGDgdjs_9546PlayZoneCode_9546GDKiraObjects1Objects = Hashtable.newFrom({"Kira": gdjs.PlayZoneCode.GDKiraObjects1});
gdjs.PlayZoneCode.mapOfGDgdjs_9546PlayZoneCode_9546GDDeathZoneObjects1Objects = Hashtable.newFrom({"DeathZone": gdjs.PlayZoneCode.GDDeathZoneObjects1});
gdjs.PlayZoneCode.mapOfGDgdjs_9546PlayZoneCode_9546GDDeathZoneObjects1Objects = Hashtable.newFrom({"DeathZone": gdjs.PlayZoneCode.GDDeathZoneObjects1});
gdjs.PlayZoneCode.mapOfGDgdjs_9546PlayZoneCode_9546GDPlatformObjects1Objects = Hashtable.newFrom({"Platform": gdjs.PlayZoneCode.GDPlatformObjects1});
gdjs.PlayZoneCode.mapOfGDgdjs_9546PlayZoneCode_9546GDPlatformObjects3Objects = Hashtable.newFrom({"Platform": gdjs.PlayZoneCode.GDPlatformObjects3});
gdjs.PlayZoneCode.mapOfGDgdjs_9546PlayZoneCode_9546GDBoostObjects4Objects = Hashtable.newFrom({"Boost": gdjs.PlayZoneCode.GDBoostObjects4});
gdjs.PlayZoneCode.mapOfGDgdjs_9546PlayZoneCode_9546GDCandleObjects4Objects = Hashtable.newFrom({"Candle": gdjs.PlayZoneCode.GDCandleObjects4});
gdjs.PlayZoneCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.randomInRange(0, 10) > 9);
}
if (isConditionTrue_0) {
gdjs.PlayZoneCode.GDBoostObjects4.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.PlayZoneCode.mapOfGDgdjs_9546PlayZoneCode_9546GDBoostObjects4Objects, runtimeScene.getScene().getVariables().getFromIndex(0).getChild(0).getAsNumber(), runtimeScene.getScene().getVariables().getFromIndex(0).getChild(1).getAsNumber(), "");
}{for(var i = 0, len = gdjs.PlayZoneCode.GDBoostObjects4.length ;i < len;++i) {
    gdjs.PlayZoneCode.GDBoostObjects4[i].getBehavior("Scale").setScale(1);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.randomInRange(0, 20) > 19);
}
if (isConditionTrue_0) {
gdjs.PlayZoneCode.GDCandleObjects4.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.PlayZoneCode.mapOfGDgdjs_9546PlayZoneCode_9546GDCandleObjects4Objects, runtimeScene.getScene().getVariables().getFromIndex(0).getChild(0).getAsNumber(), runtimeScene.getScene().getVariables().getFromIndex(0).getChild(1).getAsNumber(), "");
}{for(var i = 0, len = gdjs.PlayZoneCode.GDCandleObjects4.length ;i < len;++i) {
    gdjs.PlayZoneCode.GDCandleObjects4[i].getBehavior("Scale").setScale(1);
}
}}

}


};gdjs.PlayZoneCode.mapOfGDgdjs_9546PlayZoneCode_9546GDBroken_95959595PlatformObjects1Objects = Hashtable.newFrom({"Broken_Platform": gdjs.PlayZoneCode.GDBroken_9595PlatformObjects1});
gdjs.PlayZoneCode.eventsList3 = function(runtimeScene) {

{


const repeatCount3 = gdjs.randomInRange(1, 2);
for (let repeatIndex3 = 0;repeatIndex3 < repeatCount3;++repeatIndex3) {
gdjs.copyArray(gdjs.PlayZoneCode.GDPlatformObjects1, gdjs.PlayZoneCode.GDPlatformObjects3);


let isConditionTrue_0 = false;
if (true)
{
{runtimeScene.getScene().getVariables().getFromIndex(0).getChild(0).setNumber(gdjs.randomWithStep(16, gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) - 16, 32));
}{runtimeScene.getScene().getVariables().getFromIndex(0).getChild(1).setNumber(gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0) - (gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) / 2));
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.PlayZoneCode.mapOfGDgdjs_9546PlayZoneCode_9546GDPlatformObjects3Objects, runtimeScene.getScene().getVariables().getFromIndex(0).getChild(0).getAsNumber(), runtimeScene.getScene().getVariables().getFromIndex(0).getChild(1).getAsNumber(), "");
}{for(var i = 0, len = gdjs.PlayZoneCode.GDPlatformObjects3.length ;i < len;++i) {
    gdjs.PlayZoneCode.GDPlatformObjects3[i].getBehavior("Scale").setScale(1);
}
}{for(var i = 0, len = gdjs.PlayZoneCode.GDPlatformObjects3.length ;i < len;++i) {
    gdjs.PlayZoneCode.GDPlatformObjects3[i].setZOrder(4);
}
}
{ //Subevents: 
gdjs.PlayZoneCode.eventsList2(runtimeScene);} //Subevents end.
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.randomInRange(0, 10) > 8);
}
if (isConditionTrue_0) {
gdjs.PlayZoneCode.GDBroken_9595PlatformObjects1.length = 0;

{runtimeScene.getScene().getVariables().getFromIndex(0).getChild(1).setNumber(gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0) - (gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) / 2));
}{runtimeScene.getScene().getVariables().getFromIndex(0).getChild(0).setNumber(gdjs.randomWithStep(16, gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) - 16, 32));
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.PlayZoneCode.mapOfGDgdjs_9546PlayZoneCode_9546GDBroken_95959595PlatformObjects1Objects, runtimeScene.getScene().getVariables().getFromIndex(0).getChild(0).getAsNumber(), runtimeScene.getScene().getVariables().getFromIndex(0).getChild(1).getAsNumber(), "");
}{for(var i = 0, len = gdjs.PlayZoneCode.GDBroken_9595PlatformObjects1.length ;i < len;++i) {
    gdjs.PlayZoneCode.GDBroken_9595PlatformObjects1[i].getBehavior("Scale").setScale(1);
}
}{for(var i = 0, len = gdjs.PlayZoneCode.GDBroken_9595PlatformObjects1.length ;i < len;++i) {
    gdjs.PlayZoneCode.GDBroken_9595PlatformObjects1[i].setZOrder(4);
}
}}

}


};gdjs.PlayZoneCode.mapOfGDgdjs_9546PlayZoneCode_9546GDKiraObjects1Objects = Hashtable.newFrom({"Kira": gdjs.PlayZoneCode.GDKiraObjects1});
gdjs.PlayZoneCode.mapOfGDgdjs_9546PlayZoneCode_9546GDBroken_95959595PlatformObjects1Objects = Hashtable.newFrom({"Broken_Platform": gdjs.PlayZoneCode.GDBroken_9595PlatformObjects1});
gdjs.PlayZoneCode.mapOfGDgdjs_9546PlayZoneCode_9546GDKiraObjects1Objects = Hashtable.newFrom({"Kira": gdjs.PlayZoneCode.GDKiraObjects1});
gdjs.PlayZoneCode.mapOfGDgdjs_9546PlayZoneCode_9546GDBoostObjects1Objects = Hashtable.newFrom({"Boost": gdjs.PlayZoneCode.GDBoostObjects1});
gdjs.PlayZoneCode.asyncCallback10163524 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("Kira"), gdjs.PlayZoneCode.GDKiraObjects2);

{for(var i = 0, len = gdjs.PlayZoneCode.GDKiraObjects2.length ;i < len;++i) {
    gdjs.PlayZoneCode.GDKiraObjects2[i].getBehavior("PlatformerObject").setJumpSpeed(1150);
}
}}
gdjs.PlayZoneCode.eventsList4 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
for (const obj of gdjs.PlayZoneCode.GDKiraObjects1) asyncObjectsList.addObject("Kira", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.8), (runtimeScene) => (gdjs.PlayZoneCode.asyncCallback10163524(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.PlayZoneCode.mapOfGDgdjs_9546PlayZoneCode_9546GDKiraObjects1Objects = Hashtable.newFrom({"Kira": gdjs.PlayZoneCode.GDKiraObjects1});
gdjs.PlayZoneCode.mapOfGDgdjs_9546PlayZoneCode_9546GDCandleObjects1Objects = Hashtable.newFrom({"Candle": gdjs.PlayZoneCode.GDCandleObjects1});
gdjs.PlayZoneCode.asyncCallback11825692 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("Kira"), gdjs.PlayZoneCode.GDKiraObjects2);

{for(var i = 0, len = gdjs.PlayZoneCode.GDKiraObjects2.length ;i < len;++i) {
    gdjs.PlayZoneCode.GDKiraObjects2[i].getBehavior("PlatformerObject").setJumpSpeed(1150);
}
}}
gdjs.PlayZoneCode.eventsList5 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
for (const obj of gdjs.PlayZoneCode.GDKiraObjects1) asyncObjectsList.addObject("Kira", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.8), (runtimeScene) => (gdjs.PlayZoneCode.asyncCallback11825692(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.PlayZoneCode.eventsList6 = function(runtimeScene) {

};gdjs.PlayZoneCode.mapOfGDgdjs_9546PlayZoneCode_9546GDShurikenObjects1Objects = Hashtable.newFrom({"Shuriken": gdjs.PlayZoneCode.GDShurikenObjects1});
gdjs.PlayZoneCode.mapOfGDgdjs_9546PlayZoneCode_9546GDShurikenObjects1Objects = Hashtable.newFrom({"Shuriken": gdjs.PlayZoneCode.GDShurikenObjects1});
gdjs.PlayZoneCode.mapOfGDgdjs_9546PlayZoneCode_9546GDShurikenObjects1Objects = Hashtable.newFrom({"Shuriken": gdjs.PlayZoneCode.GDShurikenObjects1});
gdjs.PlayZoneCode.mapOfGDgdjs_9546PlayZoneCode_9546GDShurikenObjects1Objects = Hashtable.newFrom({"Shuriken": gdjs.PlayZoneCode.GDShurikenObjects1});
gdjs.PlayZoneCode.mapOfGDgdjs_9546PlayZoneCode_9546GDShurikenObjects1Objects = Hashtable.newFrom({"Shuriken": gdjs.PlayZoneCode.GDShurikenObjects1});
gdjs.PlayZoneCode.eventsList7 = function(runtimeScene) {

};gdjs.PlayZoneCode.eventsList8 = function(runtimeScene) {

};gdjs.PlayZoneCode.eventsList9 = function(runtimeScene) {

};gdjs.PlayZoneCode.eventsList10 = function(runtimeScene) {

};gdjs.PlayZoneCode.eventsList11 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Boost"), gdjs.PlayZoneCode.GDBoostObjects1);
gdjs.copyArray(runtimeScene.getObjects("Candle"), gdjs.PlayZoneCode.GDCandleObjects1);
gdjs.copyArray(runtimeScene.getObjects("DeathZone"), gdjs.PlayZoneCode.GDDeathZoneObjects1);
gdjs.copyArray(runtimeScene.getObjects("Kira"), gdjs.PlayZoneCode.GDKiraObjects1);
gdjs.copyArray(runtimeScene.getObjects("Platform"), gdjs.PlayZoneCode.GDPlatformObjects1);
{for(var i = 0, len = gdjs.PlayZoneCode.GDKiraObjects1.length ;i < len;++i) {
    gdjs.PlayZoneCode.GDKiraObjects1[i].getBehavior("Scale").setScale(1);
}
}{for(var i = 0, len = gdjs.PlayZoneCode.GDPlatformObjects1.length ;i < len;++i) {
    gdjs.PlayZoneCode.GDPlatformObjects1[i].getBehavior("Scale").setScale(1);
}
}{for(var i = 0, len = gdjs.PlayZoneCode.GDDeathZoneObjects1.length ;i < len;++i) {
    gdjs.PlayZoneCode.GDDeathZoneObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.PlayZoneCode.GDBoostObjects1.length ;i < len;++i) {
    gdjs.PlayZoneCode.GDBoostObjects1[i].getBehavior("Scale").setScale(1);
}
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}{for(var i = 0, len = gdjs.PlayZoneCode.GDCandleObjects1.length ;i < len;++i) {
    gdjs.PlayZoneCode.GDCandleObjects1[i].getBehavior("Scale").setScale(1);
}
}{gdjs.deviceSensors.orientation.activateOrientationSensor();
}{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "Playful ElectroPiano - www.lokhmatovmusic.com.mp3", 1, true, 20, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Kira"), gdjs.PlayZoneCode.GDKiraObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.PlayZoneCode.GDKiraObjects1.length;i<l;++i) {
    if ( gdjs.PlayZoneCode.GDKiraObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        isConditionTrue_0 = true;
        gdjs.PlayZoneCode.GDKiraObjects1[k] = gdjs.PlayZoneCode.GDKiraObjects1[i];
        ++k;
    }
}
gdjs.PlayZoneCode.GDKiraObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Explosion3"), gdjs.PlayZoneCode.GDExplosion3Objects1);
/* Reuse gdjs.PlayZoneCode.GDKiraObjects1 */
{for(var i = 0, len = gdjs.PlayZoneCode.GDKiraObjects1.length ;i < len;++i) {
    gdjs.PlayZoneCode.GDKiraObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}{for(var i = 0, len = gdjs.PlayZoneCode.GDKiraObjects1.length ;i < len;++i) {
    gdjs.PlayZoneCode.GDKiraObjects1[i].getBehavior("Animation").setAnimationName("Jump");
}
}{for(var i = 0, len = gdjs.PlayZoneCode.GDExplosion3Objects1.length ;i < len;++i) {
    gdjs.PlayZoneCode.GDExplosion3Objects1[i].startEmission();
}
}{for(var i = 0, len = gdjs.PlayZoneCode.GDExplosion3Objects1.length ;i < len;++i) {
    gdjs.PlayZoneCode.GDExplosion3Objects1[i].setPosition((( gdjs.PlayZoneCode.GDKiraObjects1.length === 0 ) ? 0 :gdjs.PlayZoneCode.GDKiraObjects1[0].getPointX("")) + 45,(( gdjs.PlayZoneCode.GDKiraObjects1.length === 0 ) ? 0 :gdjs.PlayZoneCode.GDKiraObjects1[0].getPointY("")) + 90);
}
}
{ //Subevents
gdjs.PlayZoneCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Kira"), gdjs.PlayZoneCode.GDKiraObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.PlayZoneCode.GDKiraObjects1.length;i<l;++i) {
    if ( gdjs.PlayZoneCode.GDKiraObjects1[i].getBehavior("Animation").hasAnimationEnded() ) {
        isConditionTrue_0 = true;
        gdjs.PlayZoneCode.GDKiraObjects1[k] = gdjs.PlayZoneCode.GDKiraObjects1[i];
        ++k;
    }
}
gdjs.PlayZoneCode.GDKiraObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.PlayZoneCode.GDKiraObjects1 */
{for(var i = 0, len = gdjs.PlayZoneCode.GDKiraObjects1.length ;i < len;++i) {
    gdjs.PlayZoneCode.GDKiraObjects1[i].getBehavior("Animation").setAnimationName("Idle");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Kira"), gdjs.PlayZoneCode.GDKiraObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.PlayZoneCode.GDKiraObjects1.length;i<l;++i) {
    if ( gdjs.PlayZoneCode.GDKiraObjects1[i].getBehavior("PlatformerObject").isUsingControl("Jump") ) {
        isConditionTrue_0 = true;
        gdjs.PlayZoneCode.GDKiraObjects1[k] = gdjs.PlayZoneCode.GDKiraObjects1[i];
        ++k;
    }
}
gdjs.PlayZoneCode.GDKiraObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "jump.wav", false, 20, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Kira"), gdjs.PlayZoneCode.GDKiraObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0) > (( gdjs.PlayZoneCode.GDKiraObjects1.length === 0 ) ? 0 :gdjs.PlayZoneCode.GDKiraObjects1[0].getPointY(""));
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("DeathZone"), gdjs.PlayZoneCode.GDDeathZoneObjects1);
/* Reuse gdjs.PlayZoneCode.GDKiraObjects1 */
{gdjs.evtTools.camera.setCameraY(runtimeScene, gdjs.evtTools.common.lerp(gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0), (( gdjs.PlayZoneCode.GDKiraObjects1.length === 0 ) ? 0 :gdjs.PlayZoneCode.GDKiraObjects1[0].getPointY("")), 0.1), "", 0);
}{for(var i = 0, len = gdjs.PlayZoneCode.GDDeathZoneObjects1.length ;i < len;++i) {
    gdjs.PlayZoneCode.GDDeathZoneObjects1[i].setY((( gdjs.PlayZoneCode.GDKiraObjects1.length === 0 ) ? 0 :gdjs.PlayZoneCode.GDKiraObjects1[0].getPointY("")) + 600);
}
}}

}


{


gdjs.PlayZoneCode.eventsList1(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("DeathZone"), gdjs.PlayZoneCode.GDDeathZoneObjects1);
gdjs.copyArray(runtimeScene.getObjects("Kira"), gdjs.PlayZoneCode.GDKiraObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.PlayZoneCode.mapOfGDgdjs_9546PlayZoneCode_9546GDKiraObjects1Objects, gdjs.PlayZoneCode.mapOfGDgdjs_9546PlayZoneCode_9546GDDeathZoneObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Leaderboard", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("DeathZone"), gdjs.PlayZoneCode.GDDeathZoneObjects1);
gdjs.copyArray(runtimeScene.getObjects("Platform"), gdjs.PlayZoneCode.GDPlatformObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.PlayZoneCode.mapOfGDgdjs_9546PlayZoneCode_9546GDDeathZoneObjects1Objects, gdjs.PlayZoneCode.mapOfGDgdjs_9546PlayZoneCode_9546GDPlatformObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.PlayZoneCode.GDPlatformObjects1 */
{runtimeScene.getGame().getVariables().getFromIndex(0).add(100);
}{for(var i = 0, len = gdjs.PlayZoneCode.GDPlatformObjects1.length ;i < len;++i) {
    gdjs.PlayZoneCode.GDPlatformObjects1[i].deleteFromScene(runtimeScene);
}
}
{ //Subevents
gdjs.PlayZoneCode.eventsList3(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Broken_Platform"), gdjs.PlayZoneCode.GDBroken_9595PlatformObjects1);
gdjs.copyArray(runtimeScene.getObjects("Kira"), gdjs.PlayZoneCode.GDKiraObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.platform.isOnPlatform(gdjs.PlayZoneCode.mapOfGDgdjs_9546PlayZoneCode_9546GDKiraObjects1Objects, "PlatformerObject", gdjs.PlayZoneCode.mapOfGDgdjs_9546PlayZoneCode_9546GDBroken_95959595PlatformObjects1Objects, false);
if (isConditionTrue_0) {
/* Reuse gdjs.PlayZoneCode.GDBroken_9595PlatformObjects1 */
{for(var i = 0, len = gdjs.PlayZoneCode.GDBroken_9595PlatformObjects1.length ;i < len;++i) {
    gdjs.PlayZoneCode.GDBroken_9595PlatformObjects1[i].activateBehavior("Platform", false);
}
}{for(var i = 0, len = gdjs.PlayZoneCode.GDBroken_9595PlatformObjects1.length ;i < len;++i) {
    gdjs.PlayZoneCode.GDBroken_9595PlatformObjects1[i].getBehavior("Animation").setAnimationName("Break");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Boost"), gdjs.PlayZoneCode.GDBoostObjects1);
gdjs.copyArray(runtimeScene.getObjects("Kira"), gdjs.PlayZoneCode.GDKiraObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.PlayZoneCode.GDKiraObjects1.length;i<l;++i) {
    if ( gdjs.PlayZoneCode.GDKiraObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        isConditionTrue_0 = true;
        gdjs.PlayZoneCode.GDKiraObjects1[k] = gdjs.PlayZoneCode.GDKiraObjects1[i];
        ++k;
    }
}
gdjs.PlayZoneCode.GDKiraObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.PlayZoneCode.mapOfGDgdjs_9546PlayZoneCode_9546GDKiraObjects1Objects, gdjs.PlayZoneCode.mapOfGDgdjs_9546PlayZoneCode_9546GDBoostObjects1Objects, false, runtimeScene, false);
}
if (isConditionTrue_0) {
/* Reuse gdjs.PlayZoneCode.GDBoostObjects1 */
/* Reuse gdjs.PlayZoneCode.GDKiraObjects1 */
{for(var i = 0, len = gdjs.PlayZoneCode.GDBoostObjects1.length ;i < len;++i) {
    gdjs.PlayZoneCode.GDBoostObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.PlayZoneCode.GDKiraObjects1.length ;i < len;++i) {
    gdjs.PlayZoneCode.GDKiraObjects1[i].getBehavior("PlatformerObject").setJumpSpeed(1400);
}
}
{ //Subevents
gdjs.PlayZoneCode.eventsList4(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Candle"), gdjs.PlayZoneCode.GDCandleObjects1);
gdjs.copyArray(runtimeScene.getObjects("Kira"), gdjs.PlayZoneCode.GDKiraObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.PlayZoneCode.GDKiraObjects1.length;i<l;++i) {
    if ( gdjs.PlayZoneCode.GDKiraObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        isConditionTrue_0 = true;
        gdjs.PlayZoneCode.GDKiraObjects1[k] = gdjs.PlayZoneCode.GDKiraObjects1[i];
        ++k;
    }
}
gdjs.PlayZoneCode.GDKiraObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.PlayZoneCode.mapOfGDgdjs_9546PlayZoneCode_9546GDKiraObjects1Objects, gdjs.PlayZoneCode.mapOfGDgdjs_9546PlayZoneCode_9546GDCandleObjects1Objects, false, runtimeScene, false);
}
if (isConditionTrue_0) {
/* Reuse gdjs.PlayZoneCode.GDCandleObjects1 */
/* Reuse gdjs.PlayZoneCode.GDKiraObjects1 */
{for(var i = 0, len = gdjs.PlayZoneCode.GDCandleObjects1.length ;i < len;++i) {
    gdjs.PlayZoneCode.GDCandleObjects1[i].getBehavior("Tween").addObjectHeightTween2("Candle", (gdjs.PlayZoneCode.GDCandleObjects1[i].getHeight()) * 50, "easeOutExpo", 1, true);
}
}{for(var i = 0, len = gdjs.PlayZoneCode.GDKiraObjects1.length ;i < len;++i) {
    gdjs.PlayZoneCode.GDKiraObjects1[i].getBehavior("PlatformerObject").setJumpSpeed(2400);
}
}
{ //Subevents
gdjs.PlayZoneCode.eventsList5(runtimeScene);} //End of subevents
}

}


{


gdjs.PlayZoneCode.eventsList6(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("Middle"), gdjs.PlayZoneCode.GDMiddleObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.PlayZoneCode.GDMiddleObjects1.length;i<l;++i) {
    if ( gdjs.PlayZoneCode.GDMiddleObjects1[i].getBehavior("ButtonFSM").IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.PlayZoneCode.GDMiddleObjects1[k] = gdjs.PlayZoneCode.GDMiddleObjects1[i];
        ++k;
    }
}
gdjs.PlayZoneCode.GDMiddleObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Kira"), gdjs.PlayZoneCode.GDKiraObjects1);
gdjs.PlayZoneCode.GDShurikenObjects1.length = 0;

{for(var i = 0, len = gdjs.PlayZoneCode.GDKiraObjects1.length ;i < len;++i) {
    gdjs.PlayZoneCode.GDKiraObjects1[i].getBehavior("FireBullet").Fire((gdjs.PlayZoneCode.GDKiraObjects1[i].getPointX("")), (gdjs.PlayZoneCode.GDKiraObjects1[i].getPointY("Fire")), gdjs.PlayZoneCode.mapOfGDgdjs_9546PlayZoneCode_9546GDShurikenObjects1Objects, -(90), 900, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.PlayZoneCode.GDShurikenObjects1.length ;i < len;++i) {
    gdjs.PlayZoneCode.GDShurikenObjects1[i].getBehavior("Scale").setScale(1);
}
}{for(var i = 0, len = gdjs.PlayZoneCode.GDShurikenObjects1.length ;i < len;++i) {
    gdjs.PlayZoneCode.GDShurikenObjects1[i].setZOrder(3);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Angle_15_RIGHT"), gdjs.PlayZoneCode.GDAngle_959515_9595RIGHTObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.PlayZoneCode.GDAngle_959515_9595RIGHTObjects1.length;i<l;++i) {
    if ( gdjs.PlayZoneCode.GDAngle_959515_9595RIGHTObjects1[i].getBehavior("ButtonFSM").IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.PlayZoneCode.GDAngle_959515_9595RIGHTObjects1[k] = gdjs.PlayZoneCode.GDAngle_959515_9595RIGHTObjects1[i];
        ++k;
    }
}
gdjs.PlayZoneCode.GDAngle_959515_9595RIGHTObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Kira"), gdjs.PlayZoneCode.GDKiraObjects1);
gdjs.PlayZoneCode.GDShurikenObjects1.length = 0;

{for(var i = 0, len = gdjs.PlayZoneCode.GDKiraObjects1.length ;i < len;++i) {
    gdjs.PlayZoneCode.GDKiraObjects1[i].getBehavior("FireBullet").Fire((gdjs.PlayZoneCode.GDKiraObjects1[i].getPointX("")), (gdjs.PlayZoneCode.GDKiraObjects1[i].getPointY("Fire")), gdjs.PlayZoneCode.mapOfGDgdjs_9546PlayZoneCode_9546GDShurikenObjects1Objects, -(75), 900, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.PlayZoneCode.GDShurikenObjects1.length ;i < len;++i) {
    gdjs.PlayZoneCode.GDShurikenObjects1[i].getBehavior("Scale").setScale(1);
}
}{for(var i = 0, len = gdjs.PlayZoneCode.GDShurikenObjects1.length ;i < len;++i) {
    gdjs.PlayZoneCode.GDShurikenObjects1[i].setZOrder(3);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Angle_15_LEFT"), gdjs.PlayZoneCode.GDAngle_959515_9595LEFTObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.PlayZoneCode.GDAngle_959515_9595LEFTObjects1.length;i<l;++i) {
    if ( gdjs.PlayZoneCode.GDAngle_959515_9595LEFTObjects1[i].getBehavior("ButtonFSM").IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.PlayZoneCode.GDAngle_959515_9595LEFTObjects1[k] = gdjs.PlayZoneCode.GDAngle_959515_9595LEFTObjects1[i];
        ++k;
    }
}
gdjs.PlayZoneCode.GDAngle_959515_9595LEFTObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Kira"), gdjs.PlayZoneCode.GDKiraObjects1);
gdjs.PlayZoneCode.GDShurikenObjects1.length = 0;

{for(var i = 0, len = gdjs.PlayZoneCode.GDKiraObjects1.length ;i < len;++i) {
    gdjs.PlayZoneCode.GDKiraObjects1[i].getBehavior("FireBullet").Fire((gdjs.PlayZoneCode.GDKiraObjects1[i].getPointX("")), (gdjs.PlayZoneCode.GDKiraObjects1[i].getPointY("Fire")), gdjs.PlayZoneCode.mapOfGDgdjs_9546PlayZoneCode_9546GDShurikenObjects1Objects, -(105), 900, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.PlayZoneCode.GDShurikenObjects1.length ;i < len;++i) {
    gdjs.PlayZoneCode.GDShurikenObjects1[i].getBehavior("Scale").setScale(1);
}
}{for(var i = 0, len = gdjs.PlayZoneCode.GDShurikenObjects1.length ;i < len;++i) {
    gdjs.PlayZoneCode.GDShurikenObjects1[i].setZOrder(3);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Angle_45_RIGHT"), gdjs.PlayZoneCode.GDAngle_959545_9595RIGHTObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.PlayZoneCode.GDAngle_959545_9595RIGHTObjects1.length;i<l;++i) {
    if ( gdjs.PlayZoneCode.GDAngle_959545_9595RIGHTObjects1[i].getBehavior("ButtonFSM").IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.PlayZoneCode.GDAngle_959545_9595RIGHTObjects1[k] = gdjs.PlayZoneCode.GDAngle_959545_9595RIGHTObjects1[i];
        ++k;
    }
}
gdjs.PlayZoneCode.GDAngle_959545_9595RIGHTObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Kira"), gdjs.PlayZoneCode.GDKiraObjects1);
gdjs.PlayZoneCode.GDShurikenObjects1.length = 0;

{for(var i = 0, len = gdjs.PlayZoneCode.GDKiraObjects1.length ;i < len;++i) {
    gdjs.PlayZoneCode.GDKiraObjects1[i].getBehavior("FireBullet").Fire((gdjs.PlayZoneCode.GDKiraObjects1[i].getPointX("")), (gdjs.PlayZoneCode.GDKiraObjects1[i].getPointY("Fire")), gdjs.PlayZoneCode.mapOfGDgdjs_9546PlayZoneCode_9546GDShurikenObjects1Objects, -(60), 900, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.PlayZoneCode.GDShurikenObjects1.length ;i < len;++i) {
    gdjs.PlayZoneCode.GDShurikenObjects1[i].getBehavior("Scale").setScale(1);
}
}{for(var i = 0, len = gdjs.PlayZoneCode.GDShurikenObjects1.length ;i < len;++i) {
    gdjs.PlayZoneCode.GDShurikenObjects1[i].setZOrder(3);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Angle_45_LEFT"), gdjs.PlayZoneCode.GDAngle_959545_9595LEFTObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.PlayZoneCode.GDAngle_959545_9595LEFTObjects1.length;i<l;++i) {
    if ( gdjs.PlayZoneCode.GDAngle_959545_9595LEFTObjects1[i].getBehavior("ButtonFSM").IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.PlayZoneCode.GDAngle_959545_9595LEFTObjects1[k] = gdjs.PlayZoneCode.GDAngle_959545_9595LEFTObjects1[i];
        ++k;
    }
}
gdjs.PlayZoneCode.GDAngle_959545_9595LEFTObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Kira"), gdjs.PlayZoneCode.GDKiraObjects1);
gdjs.PlayZoneCode.GDShurikenObjects1.length = 0;

{for(var i = 0, len = gdjs.PlayZoneCode.GDKiraObjects1.length ;i < len;++i) {
    gdjs.PlayZoneCode.GDKiraObjects1[i].getBehavior("FireBullet").Fire((gdjs.PlayZoneCode.GDKiraObjects1[i].getPointX("")), (gdjs.PlayZoneCode.GDKiraObjects1[i].getPointY("Fire")), gdjs.PlayZoneCode.mapOfGDgdjs_9546PlayZoneCode_9546GDShurikenObjects1Objects, -(120), 900, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.PlayZoneCode.GDShurikenObjects1.length ;i < len;++i) {
    gdjs.PlayZoneCode.GDShurikenObjects1[i].getBehavior("Scale").setScale(1);
}
}{for(var i = 0, len = gdjs.PlayZoneCode.GDShurikenObjects1.length ;i < len;++i) {
    gdjs.PlayZoneCode.GDShurikenObjects1[i].setZOrder(3);
}
}}

}


{


gdjs.PlayZoneCode.eventsList7(runtimeScene);
}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Scoretext"), gdjs.PlayZoneCode.GDScoretextObjects1);
{for(var i = 0, len = gdjs.PlayZoneCode.GDScoretextObjects1.length ;i < len;++i) {
    gdjs.PlayZoneCode.GDScoretextObjects1[i].getBehavior("Text").setText("Score " + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)));
}
}}

}


{


gdjs.PlayZoneCode.eventsList8(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("LEFT"), gdjs.PlayZoneCode.GDLEFTObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.PlayZoneCode.GDLEFTObjects1.length;i<l;++i) {
    if ( gdjs.PlayZoneCode.GDLEFTObjects1[i].getBehavior("ButtonFSM").IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.PlayZoneCode.GDLEFTObjects1[k] = gdjs.PlayZoneCode.GDLEFTObjects1[i];
        ++k;
    }
}
gdjs.PlayZoneCode.GDLEFTObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Kira"), gdjs.PlayZoneCode.GDKiraObjects1);
{for(var i = 0, len = gdjs.PlayZoneCode.GDKiraObjects1.length ;i < len;++i) {
    gdjs.PlayZoneCode.GDKiraObjects1[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("RIGHT"), gdjs.PlayZoneCode.GDRIGHTObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.PlayZoneCode.GDRIGHTObjects1.length;i<l;++i) {
    if ( gdjs.PlayZoneCode.GDRIGHTObjects1[i].getBehavior("ButtonFSM").IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.PlayZoneCode.GDRIGHTObjects1[k] = gdjs.PlayZoneCode.GDRIGHTObjects1[i];
        ++k;
    }
}
gdjs.PlayZoneCode.GDRIGHTObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Kira"), gdjs.PlayZoneCode.GDKiraObjects1);
{for(var i = 0, len = gdjs.PlayZoneCode.GDKiraObjects1.length ;i < len;++i) {
    gdjs.PlayZoneCode.GDKiraObjects1[i].getBehavior("PlatformerObject").simulateRightKey();
}
}}

}


{


gdjs.PlayZoneCode.eventsList9(runtimeScene);
}


{



}


{


gdjs.PlayZoneCode.eventsList10(runtimeScene);
}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.PlayZoneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.PlayZoneCode.GDKiraObjects1.length = 0;
gdjs.PlayZoneCode.GDKiraObjects2.length = 0;
gdjs.PlayZoneCode.GDKiraObjects3.length = 0;
gdjs.PlayZoneCode.GDKiraObjects4.length = 0;
gdjs.PlayZoneCode.GDKiraObjects5.length = 0;
gdjs.PlayZoneCode.GDDeathZoneObjects1.length = 0;
gdjs.PlayZoneCode.GDDeathZoneObjects2.length = 0;
gdjs.PlayZoneCode.GDDeathZoneObjects3.length = 0;
gdjs.PlayZoneCode.GDDeathZoneObjects4.length = 0;
gdjs.PlayZoneCode.GDDeathZoneObjects5.length = 0;
gdjs.PlayZoneCode.GDPlatformObjects1.length = 0;
gdjs.PlayZoneCode.GDPlatformObjects2.length = 0;
gdjs.PlayZoneCode.GDPlatformObjects3.length = 0;
gdjs.PlayZoneCode.GDPlatformObjects4.length = 0;
gdjs.PlayZoneCode.GDPlatformObjects5.length = 0;
gdjs.PlayZoneCode.GDBoostObjects1.length = 0;
gdjs.PlayZoneCode.GDBoostObjects2.length = 0;
gdjs.PlayZoneCode.GDBoostObjects3.length = 0;
gdjs.PlayZoneCode.GDBoostObjects4.length = 0;
gdjs.PlayZoneCode.GDBoostObjects5.length = 0;
gdjs.PlayZoneCode.GDScoretextObjects1.length = 0;
gdjs.PlayZoneCode.GDScoretextObjects2.length = 0;
gdjs.PlayZoneCode.GDScoretextObjects3.length = 0;
gdjs.PlayZoneCode.GDScoretextObjects4.length = 0;
gdjs.PlayZoneCode.GDScoretextObjects5.length = 0;
gdjs.PlayZoneCode.GDBGObjects1.length = 0;
gdjs.PlayZoneCode.GDBGObjects2.length = 0;
gdjs.PlayZoneCode.GDBGObjects3.length = 0;
gdjs.PlayZoneCode.GDBGObjects4.length = 0;
gdjs.PlayZoneCode.GDBGObjects5.length = 0;
gdjs.PlayZoneCode.GDLEFTObjects1.length = 0;
gdjs.PlayZoneCode.GDLEFTObjects2.length = 0;
gdjs.PlayZoneCode.GDLEFTObjects3.length = 0;
gdjs.PlayZoneCode.GDLEFTObjects4.length = 0;
gdjs.PlayZoneCode.GDLEFTObjects5.length = 0;
gdjs.PlayZoneCode.GDRIGHTObjects1.length = 0;
gdjs.PlayZoneCode.GDRIGHTObjects2.length = 0;
gdjs.PlayZoneCode.GDRIGHTObjects3.length = 0;
gdjs.PlayZoneCode.GDRIGHTObjects4.length = 0;
gdjs.PlayZoneCode.GDRIGHTObjects5.length = 0;
gdjs.PlayZoneCode.GDCandleObjects1.length = 0;
gdjs.PlayZoneCode.GDCandleObjects2.length = 0;
gdjs.PlayZoneCode.GDCandleObjects3.length = 0;
gdjs.PlayZoneCode.GDCandleObjects4.length = 0;
gdjs.PlayZoneCode.GDCandleObjects5.length = 0;
gdjs.PlayZoneCode.GDBroken_9595PlatformObjects1.length = 0;
gdjs.PlayZoneCode.GDBroken_9595PlatformObjects2.length = 0;
gdjs.PlayZoneCode.GDBroken_9595PlatformObjects3.length = 0;
gdjs.PlayZoneCode.GDBroken_9595PlatformObjects4.length = 0;
gdjs.PlayZoneCode.GDBroken_9595PlatformObjects5.length = 0;
gdjs.PlayZoneCode.GDExplosion3Objects1.length = 0;
gdjs.PlayZoneCode.GDExplosion3Objects2.length = 0;
gdjs.PlayZoneCode.GDExplosion3Objects3.length = 0;
gdjs.PlayZoneCode.GDExplosion3Objects4.length = 0;
gdjs.PlayZoneCode.GDExplosion3Objects5.length = 0;
gdjs.PlayZoneCode.GDMiddleObjects1.length = 0;
gdjs.PlayZoneCode.GDMiddleObjects2.length = 0;
gdjs.PlayZoneCode.GDMiddleObjects3.length = 0;
gdjs.PlayZoneCode.GDMiddleObjects4.length = 0;
gdjs.PlayZoneCode.GDMiddleObjects5.length = 0;
gdjs.PlayZoneCode.GDAngle_959515_9595RIGHTObjects1.length = 0;
gdjs.PlayZoneCode.GDAngle_959515_9595RIGHTObjects2.length = 0;
gdjs.PlayZoneCode.GDAngle_959515_9595RIGHTObjects3.length = 0;
gdjs.PlayZoneCode.GDAngle_959515_9595RIGHTObjects4.length = 0;
gdjs.PlayZoneCode.GDAngle_959515_9595RIGHTObjects5.length = 0;
gdjs.PlayZoneCode.GDAngle_959545_9595RIGHTObjects1.length = 0;
gdjs.PlayZoneCode.GDAngle_959545_9595RIGHTObjects2.length = 0;
gdjs.PlayZoneCode.GDAngle_959545_9595RIGHTObjects3.length = 0;
gdjs.PlayZoneCode.GDAngle_959545_9595RIGHTObjects4.length = 0;
gdjs.PlayZoneCode.GDAngle_959545_9595RIGHTObjects5.length = 0;
gdjs.PlayZoneCode.GDAngle_959515_9595LEFTObjects1.length = 0;
gdjs.PlayZoneCode.GDAngle_959515_9595LEFTObjects2.length = 0;
gdjs.PlayZoneCode.GDAngle_959515_9595LEFTObjects3.length = 0;
gdjs.PlayZoneCode.GDAngle_959515_9595LEFTObjects4.length = 0;
gdjs.PlayZoneCode.GDAngle_959515_9595LEFTObjects5.length = 0;
gdjs.PlayZoneCode.GDAngle_959545_9595LEFTObjects1.length = 0;
gdjs.PlayZoneCode.GDAngle_959545_9595LEFTObjects2.length = 0;
gdjs.PlayZoneCode.GDAngle_959545_9595LEFTObjects3.length = 0;
gdjs.PlayZoneCode.GDAngle_959545_9595LEFTObjects4.length = 0;
gdjs.PlayZoneCode.GDAngle_959545_9595LEFTObjects5.length = 0;
gdjs.PlayZoneCode.GDShurikenObjects1.length = 0;
gdjs.PlayZoneCode.GDShurikenObjects2.length = 0;
gdjs.PlayZoneCode.GDShurikenObjects3.length = 0;
gdjs.PlayZoneCode.GDShurikenObjects4.length = 0;
gdjs.PlayZoneCode.GDShurikenObjects5.length = 0;

gdjs.PlayZoneCode.eventsList11(runtimeScene);

return;

}

gdjs['PlayZoneCode'] = gdjs.PlayZoneCode;
