basic.forever(function on_forever() {
    if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 0 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 0) {
        maqueen.MotorRun(maqueen.aMotors.M1, maqueen.Dir.CW, 80)
        maqueen.MotorRun(maqueen.aMotors.M2, maqueen.Dir.CW, 80)
    } else if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 0 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 1) {
        maqueen.MotorRun(maqueen.aMotors.M1, maqueen.Dir.CW, 0)
        maqueen.MotorRun(maqueen.aMotors.M2, maqueen.Dir.CW, 80)
        if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 1 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 1) {
            maqueen.MotorRun(maqueen.aMotors.M1, maqueen.Dir.CW, 0)
            maqueen.MotorRun(maqueen.aMotors.M2, maqueen.Dir.CW, 80)
        }
        
    } else if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 1 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 0) {
        maqueen.MotorRun(maqueen.aMotors.M1, maqueen.Dir.CW, 80)
        maqueen.MotorRun(maqueen.aMotors.M2, maqueen.Dir.CW, 0)
        if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 1 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 1) {
            maqueen.MotorRun(maqueen.aMotors.M1, maqueen.Dir.CW, 80)
            maqueen.MotorRun(maqueen.aMotors.M2, maqueen.Dir.CW, 0)
        }
        
    }
    
})
