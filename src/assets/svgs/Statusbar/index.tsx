import {Step1} from './Step1'
import {Step2} from './Step2'
import {Step3} from './Step3'
import {Step4} from './Step4'

const steps = new Map()

steps.set("1", Step1)
steps.set("2", Step2)
steps.set("3", Step3)
steps.set("4", Step4)

export { steps }
