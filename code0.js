gdjs.Game_32sceneCode = {};
gdjs.Game_32sceneCode.GDPlayerObjects1= [];
gdjs.Game_32sceneCode.GDPlayerObjects2= [];
gdjs.Game_32sceneCode.GDNewObjectObjects1= [];
gdjs.Game_32sceneCode.GDNewObjectObjects2= [];
gdjs.Game_32sceneCode.GDSpikeBaseObjects1= [];
gdjs.Game_32sceneCode.GDSpikeBaseObjects2= [];
gdjs.Game_32sceneCode.GDBrickObjects1= [];
gdjs.Game_32sceneCode.GDBrickObjects2= [];
gdjs.Game_32sceneCode.GDSpikesObjects1= [];
gdjs.Game_32sceneCode.GDSpikesObjects2= [];
gdjs.Game_32sceneCode.GDcheat_95promptObjects1= [];
gdjs.Game_32sceneCode.GDcheat_95promptObjects2= [];

gdjs.Game_32sceneCode.conditionTrue_0 = {val:false};
gdjs.Game_32sceneCode.condition0IsTrue_0 = {val:false};
gdjs.Game_32sceneCode.condition1IsTrue_0 = {val:false};
gdjs.Game_32sceneCode.condition2IsTrue_0 = {val:false};


gdjs.Game_32sceneCode.mapOfGDgdjs_46Game_9532sceneCode_46GDBrickObjects1Objects = Hashtable.newFrom({"Brick": gdjs.Game_32sceneCode.GDBrickObjects1});gdjs.Game_32sceneCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32sceneCode.GDPlayerObjects1);

gdjs.Game_32sceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Game_32sceneCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Game_32sceneCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isJumping() ) {
        gdjs.Game_32sceneCode.condition0IsTrue_0.val = true;
        gdjs.Game_32sceneCode.GDPlayerObjects1[k] = gdjs.Game_32sceneCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Game_32sceneCode.GDPlayerObjects1.length = k;}if (gdjs.Game_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Game_32sceneCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.Game_32sceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Game_32sceneCode.GDPlayerObjects1[i].setAnimationName("Jump");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32sceneCode.GDPlayerObjects1);

gdjs.Game_32sceneCode.condition0IsTrue_0.val = false;
gdjs.Game_32sceneCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Game_32sceneCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Game_32sceneCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isMoving() ) {
        gdjs.Game_32sceneCode.condition0IsTrue_0.val = true;
        gdjs.Game_32sceneCode.GDPlayerObjects1[k] = gdjs.Game_32sceneCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Game_32sceneCode.GDPlayerObjects1.length = k;}if ( gdjs.Game_32sceneCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Game_32sceneCode.GDPlayerObjects1.length;i<l;++i) {
    if ( !(gdjs.Game_32sceneCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isJumping()) ) {
        gdjs.Game_32sceneCode.condition1IsTrue_0.val = true;
        gdjs.Game_32sceneCode.GDPlayerObjects1[k] = gdjs.Game_32sceneCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Game_32sceneCode.GDPlayerObjects1.length = k;}}
if (gdjs.Game_32sceneCode.condition1IsTrue_0.val) {
/* Reuse gdjs.Game_32sceneCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.Game_32sceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Game_32sceneCode.GDPlayerObjects1[i].setAnimationName("Run");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32sceneCode.GDPlayerObjects1);

gdjs.Game_32sceneCode.condition0IsTrue_0.val = false;
gdjs.Game_32sceneCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Game_32sceneCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Game_32sceneCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.Game_32sceneCode.condition0IsTrue_0.val = true;
        gdjs.Game_32sceneCode.GDPlayerObjects1[k] = gdjs.Game_32sceneCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Game_32sceneCode.GDPlayerObjects1.length = k;}if ( gdjs.Game_32sceneCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Game_32sceneCode.GDPlayerObjects1.length;i<l;++i) {
    if ( !(gdjs.Game_32sceneCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isMoving()) ) {
        gdjs.Game_32sceneCode.condition1IsTrue_0.val = true;
        gdjs.Game_32sceneCode.GDPlayerObjects1[k] = gdjs.Game_32sceneCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Game_32sceneCode.GDPlayerObjects1.length = k;}}
if (gdjs.Game_32sceneCode.condition1IsTrue_0.val) {
/* Reuse gdjs.Game_32sceneCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.Game_32sceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Game_32sceneCode.GDPlayerObjects1[i].setAnimationName("Idle");
}
}}

}


{


gdjs.Game_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.Game_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}if (gdjs.Game_32sceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32sceneCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Game_32sceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Game_32sceneCode.GDPlayerObjects1[i].flipX(false);
}
}}

}


{


gdjs.Game_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.Game_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}if (gdjs.Game_32sceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32sceneCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Game_32sceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Game_32sceneCode.GDPlayerObjects1[i].flipX(true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32sceneCode.GDPlayerObjects1);

gdjs.Game_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.Game_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) >= (( gdjs.Game_32sceneCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Game_32sceneCode.GDPlayerObjects1[0].getPointY("")) - 600;
}if (gdjs.Game_32sceneCode.condition0IsTrue_0.val) {
gdjs.Game_32sceneCode.GDBrickObjects1.length = 0;

{runtimeScene.getGame().getVariables().getFromIndex(0).sub(gdjs.randomInRange(50, 100));
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Game_32sceneCode.mapOfGDgdjs_46Game_9532sceneCode_46GDBrickObjects1Objects, gdjs.randomInRange(0, 500), gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)), "");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Brick"), gdjs.Game_32sceneCode.GDBrickObjects1);
gdjs.copyArray(runtimeScene.getObjects("Spikes"), gdjs.Game_32sceneCode.GDSpikesObjects1);

gdjs.Game_32sceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Game_32sceneCode.GDBrickObjects1.length;i<l;++i) {
    if ( gdjs.Game_32sceneCode.GDBrickObjects1[i].getY() >= (( gdjs.Game_32sceneCode.GDSpikesObjects1.length === 0 ) ? 0 :gdjs.Game_32sceneCode.GDSpikesObjects1[0].getY()) - 16 ) {
        gdjs.Game_32sceneCode.condition0IsTrue_0.val = true;
        gdjs.Game_32sceneCode.GDBrickObjects1[k] = gdjs.Game_32sceneCode.GDBrickObjects1[i];
        ++k;
    }
}
gdjs.Game_32sceneCode.GDBrickObjects1.length = k;}if (gdjs.Game_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Game_32sceneCode.GDBrickObjects1 */
{for(var i = 0, len = gdjs.Game_32sceneCode.GDBrickObjects1.length ;i < len;++i) {
    gdjs.Game_32sceneCode.GDBrickObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Brick"), gdjs.Game_32sceneCode.GDBrickObjects1);

gdjs.Game_32sceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Game_32sceneCode.GDBrickObjects1.length;i<l;++i) {
    if ( gdjs.Game_32sceneCode.GDBrickObjects1[i].getWidth() == 1 ) {
        gdjs.Game_32sceneCode.condition0IsTrue_0.val = true;
        gdjs.Game_32sceneCode.GDBrickObjects1[k] = gdjs.Game_32sceneCode.GDBrickObjects1[i];
        ++k;
    }
}
gdjs.Game_32sceneCode.GDBrickObjects1.length = k;}if (gdjs.Game_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Game_32sceneCode.GDBrickObjects1 */
{for(var i = 0, len = gdjs.Game_32sceneCode.GDBrickObjects1.length ;i < len;++i) {
    gdjs.Game_32sceneCode.GDBrickObjects1[i].setWidth(gdjs.randomInRange(4, 16) * 16);
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32sceneCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("cheat_prompt"), gdjs.Game_32sceneCode.GDcheat_95promptObjects1);
{gdjs.evtTools.camera.setCameraY(runtimeScene, (( gdjs.Game_32sceneCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Game_32sceneCode.GDPlayerObjects1[0].getPointY("")), "", 0);
}{for(var i = 0, len = gdjs.Game_32sceneCode.GDcheat_95promptObjects1.length ;i < len;++i) {
    gdjs.Game_32sceneCode.GDcheat_95promptObjects1[i].setY((( gdjs.Game_32sceneCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Game_32sceneCode.GDPlayerObjects1[0].getPointY("")) - 250);
}
}}

}


{


gdjs.Game_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.Game_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Game_32sceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32sceneCode.GDPlayerObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber((( gdjs.Game_32sceneCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Game_32sceneCode.GDPlayerObjects1[0].getPointY("")));
}}

}


{


gdjs.Game_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.Game_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Game_32sceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("SpikeBase"), gdjs.Game_32sceneCode.GDSpikeBaseObjects1);
gdjs.copyArray(runtimeScene.getObjects("Spikes"), gdjs.Game_32sceneCode.GDSpikesObjects1);
{for(var i = 0, len = gdjs.Game_32sceneCode.GDSpikeBaseObjects1.length ;i < len;++i) {
    gdjs.Game_32sceneCode.GDSpikeBaseObjects1[i].addForce(0, -(80), 1);
}
}{for(var i = 0, len = gdjs.Game_32sceneCode.GDSpikesObjects1.length ;i < len;++i) {
    gdjs.Game_32sceneCode.GDSpikesObjects1[i].addForce(0, -(80), 1);
}
}}

}


{


gdjs.Game_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.Game_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "p");
}if (gdjs.Game_32sceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("cheat_prompt"), gdjs.Game_32sceneCode.GDcheat_95promptObjects1);
{for(var i = 0, len = gdjs.Game_32sceneCode.GDcheat_95promptObjects1.length ;i < len;++i) {
    gdjs.Game_32sceneCode.GDcheat_95promptObjects1[i].setString("death disabled");
}
}{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32sceneCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("Spikes"), gdjs.Game_32sceneCode.GDSpikesObjects1);

gdjs.Game_32sceneCode.condition0IsTrue_0.val = false;
gdjs.Game_32sceneCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Game_32sceneCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Game_32sceneCode.GDPlayerObjects1[i].getY() >= (( gdjs.Game_32sceneCode.GDSpikesObjects1.length === 0 ) ? 0 :gdjs.Game_32sceneCode.GDSpikesObjects1[0].getY()) - 16 ) {
        gdjs.Game_32sceneCode.condition0IsTrue_0.val = true;
        gdjs.Game_32sceneCode.GDPlayerObjects1[k] = gdjs.Game_32sceneCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Game_32sceneCode.GDPlayerObjects1.length = k;}if ( gdjs.Game_32sceneCode.condition0IsTrue_0.val ) {
{
gdjs.Game_32sceneCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 0;
}}
if (gdjs.Game_32sceneCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game scene", true);
}}

}


};

gdjs.Game_32sceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Game_32sceneCode.GDPlayerObjects1.length = 0;
gdjs.Game_32sceneCode.GDPlayerObjects2.length = 0;
gdjs.Game_32sceneCode.GDNewObjectObjects1.length = 0;
gdjs.Game_32sceneCode.GDNewObjectObjects2.length = 0;
gdjs.Game_32sceneCode.GDSpikeBaseObjects1.length = 0;
gdjs.Game_32sceneCode.GDSpikeBaseObjects2.length = 0;
gdjs.Game_32sceneCode.GDBrickObjects1.length = 0;
gdjs.Game_32sceneCode.GDBrickObjects2.length = 0;
gdjs.Game_32sceneCode.GDSpikesObjects1.length = 0;
gdjs.Game_32sceneCode.GDSpikesObjects2.length = 0;
gdjs.Game_32sceneCode.GDcheat_95promptObjects1.length = 0;
gdjs.Game_32sceneCode.GDcheat_95promptObjects2.length = 0;

gdjs.Game_32sceneCode.eventsList0(runtimeScene);
return;

}

gdjs['Game_32sceneCode'] = gdjs.Game_32sceneCode;
