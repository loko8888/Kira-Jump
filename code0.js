gdjs.Main_32MenuCode = {};
gdjs.Main_32MenuCode.GDKiraObjects1= [];
gdjs.Main_32MenuCode.GDKiraObjects2= [];
gdjs.Main_32MenuCode.GDKiraObjects3= [];
gdjs.Main_32MenuCode.GDNewSpriteObjects1= [];
gdjs.Main_32MenuCode.GDNewSpriteObjects2= [];
gdjs.Main_32MenuCode.GDNewSpriteObjects3= [];
gdjs.Main_32MenuCode.GDPlatformObjects1= [];
gdjs.Main_32MenuCode.GDPlatformObjects2= [];
gdjs.Main_32MenuCode.GDPlatformObjects3= [];
gdjs.Main_32MenuCode.GDBoostObjects1= [];
gdjs.Main_32MenuCode.GDBoostObjects2= [];
gdjs.Main_32MenuCode.GDBoostObjects3= [];
gdjs.Main_32MenuCode.GDStartObjects1= [];
gdjs.Main_32MenuCode.GDStartObjects2= [];
gdjs.Main_32MenuCode.GDStartObjects3= [];
gdjs.Main_32MenuCode.GDBGObjects1= [];
gdjs.Main_32MenuCode.GDBGObjects2= [];
gdjs.Main_32MenuCode.GDBGObjects3= [];
gdjs.Main_32MenuCode.GDkiratextObjects1= [];
gdjs.Main_32MenuCode.GDkiratextObjects2= [];
gdjs.Main_32MenuCode.GDkiratextObjects3= [];
gdjs.Main_32MenuCode.GD_9595KIRAObjects1= [];
gdjs.Main_32MenuCode.GD_9595KIRAObjects2= [];
gdjs.Main_32MenuCode.GD_9595KIRAObjects3= [];
gdjs.Main_32MenuCode.GDScore_9595BGObjects1= [];
gdjs.Main_32MenuCode.GDScore_9595BGObjects2= [];
gdjs.Main_32MenuCode.GDScore_9595BGObjects3= [];
gdjs.Main_32MenuCode.GDPlayerNameInputObjects1= [];
gdjs.Main_32MenuCode.GDPlayerNameInputObjects2= [];
gdjs.Main_32MenuCode.GDPlayerNameInputObjects3= [];
gdjs.Main_32MenuCode.GDEnter_9595nameObjects1= [];
gdjs.Main_32MenuCode.GDEnter_9595nameObjects2= [];
gdjs.Main_32MenuCode.GDEnter_9595nameObjects3= [];
gdjs.Main_32MenuCode.GDLFGObjects1= [];
gdjs.Main_32MenuCode.GDLFGObjects2= [];
gdjs.Main_32MenuCode.GDLFGObjects3= [];


gdjs.Main_32MenuCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "Playful ElectroPiano - www.lokhmatovmusic.com.mp3", 1, true, 20, 1);
}}

}


};gdjs.Main_32MenuCode.mapOfGDgdjs_9546Main_959532MenuCode_9546GDKiraObjects1Objects = Hashtable.newFrom({"Kira": gdjs.Main_32MenuCode.GDKiraObjects1});
gdjs.Main_32MenuCode.mapOfGDgdjs_9546Main_959532MenuCode_9546GD_95959595KIRAObjects1Objects = Hashtable.newFrom({"_KIRA": gdjs.Main_32MenuCode.GD_9595KIRAObjects1});
gdjs.Main_32MenuCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Start"), gdjs.Main_32MenuCode.GDStartObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Main_32MenuCode.GDStartObjects2.length;i<l;++i) {
    if ( gdjs.Main_32MenuCode.GDStartObjects2[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Main_32MenuCode.GDStartObjects2[k] = gdjs.Main_32MenuCode.GDStartObjects2[i];
        ++k;
    }
}
gdjs.Main_32MenuCode.GDStartObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("PlayerNameInput"), gdjs.Main_32MenuCode.GDPlayerNameInputObjects2);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "PlayZone", false);
}{runtimeScene.getGame().getVariables().getFromIndex(1).setString((( gdjs.Main_32MenuCode.GDPlayerNameInputObjects2.length === 0 ) ? "" :gdjs.Main_32MenuCode.GDPlayerNameInputObjects2[0].getText()));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Start"), gdjs.Main_32MenuCode.GDStartObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Main_32MenuCode.GDStartObjects2.length;i<l;++i) {
    if ( gdjs.Main_32MenuCode.GDStartObjects2[i].getBehavior("ButtonFSM").IsHovered((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Main_32MenuCode.GDStartObjects2[k] = gdjs.Main_32MenuCode.GDStartObjects2[i];
        ++k;
    }
}
gdjs.Main_32MenuCode.GDStartObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Main_32MenuCode.GDStartObjects2 */
{for(var i = 0, len = gdjs.Main_32MenuCode.GDStartObjects2.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDStartObjects2[i].getBehavior("ShakeObject_PositionAngle").ShakeObject_PositionAngle(0.5, 2, 4, 3, 0.08, false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Kira"), gdjs.Main_32MenuCode.GDKiraObjects1);
gdjs.copyArray(runtimeScene.getObjects("_KIRA"), gdjs.Main_32MenuCode.GD_9595KIRAObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Main_32MenuCode.mapOfGDgdjs_9546Main_959532MenuCode_9546GDKiraObjects1Objects, gdjs.Main_32MenuCode.mapOfGDgdjs_9546Main_959532MenuCode_9546GD_95959595KIRAObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Main_32MenuCode.GDKiraObjects1 */
{for(var i = 0, len = gdjs.Main_32MenuCode.GDKiraObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDKiraObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}}

}


};gdjs.Main_32MenuCode.eventsList2 = function(runtimeScene) {

{


gdjs.Main_32MenuCode.eventsList0(runtimeScene);
}


{


gdjs.Main_32MenuCode.eventsList1(runtimeScene);
}


};

gdjs.Main_32MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Main_32MenuCode.GDKiraObjects1.length = 0;
gdjs.Main_32MenuCode.GDKiraObjects2.length = 0;
gdjs.Main_32MenuCode.GDKiraObjects3.length = 0;
gdjs.Main_32MenuCode.GDNewSpriteObjects1.length = 0;
gdjs.Main_32MenuCode.GDNewSpriteObjects2.length = 0;
gdjs.Main_32MenuCode.GDNewSpriteObjects3.length = 0;
gdjs.Main_32MenuCode.GDPlatformObjects1.length = 0;
gdjs.Main_32MenuCode.GDPlatformObjects2.length = 0;
gdjs.Main_32MenuCode.GDPlatformObjects3.length = 0;
gdjs.Main_32MenuCode.GDBoostObjects1.length = 0;
gdjs.Main_32MenuCode.GDBoostObjects2.length = 0;
gdjs.Main_32MenuCode.GDBoostObjects3.length = 0;
gdjs.Main_32MenuCode.GDStartObjects1.length = 0;
gdjs.Main_32MenuCode.GDStartObjects2.length = 0;
gdjs.Main_32MenuCode.GDStartObjects3.length = 0;
gdjs.Main_32MenuCode.GDBGObjects1.length = 0;
gdjs.Main_32MenuCode.GDBGObjects2.length = 0;
gdjs.Main_32MenuCode.GDBGObjects3.length = 0;
gdjs.Main_32MenuCode.GDkiratextObjects1.length = 0;
gdjs.Main_32MenuCode.GDkiratextObjects2.length = 0;
gdjs.Main_32MenuCode.GDkiratextObjects3.length = 0;
gdjs.Main_32MenuCode.GD_9595KIRAObjects1.length = 0;
gdjs.Main_32MenuCode.GD_9595KIRAObjects2.length = 0;
gdjs.Main_32MenuCode.GD_9595KIRAObjects3.length = 0;
gdjs.Main_32MenuCode.GDScore_9595BGObjects1.length = 0;
gdjs.Main_32MenuCode.GDScore_9595BGObjects2.length = 0;
gdjs.Main_32MenuCode.GDScore_9595BGObjects3.length = 0;
gdjs.Main_32MenuCode.GDPlayerNameInputObjects1.length = 0;
gdjs.Main_32MenuCode.GDPlayerNameInputObjects2.length = 0;
gdjs.Main_32MenuCode.GDPlayerNameInputObjects3.length = 0;
gdjs.Main_32MenuCode.GDEnter_9595nameObjects1.length = 0;
gdjs.Main_32MenuCode.GDEnter_9595nameObjects2.length = 0;
gdjs.Main_32MenuCode.GDEnter_9595nameObjects3.length = 0;
gdjs.Main_32MenuCode.GDLFGObjects1.length = 0;
gdjs.Main_32MenuCode.GDLFGObjects2.length = 0;
gdjs.Main_32MenuCode.GDLFGObjects3.length = 0;

gdjs.Main_32MenuCode.eventsList2(runtimeScene);

return;

}

gdjs['Main_32MenuCode'] = gdjs.Main_32MenuCode;
