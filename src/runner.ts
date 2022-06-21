import { info } from '@actions/core'
import { configureRepo } from './git'
import { prepareTheme } from './theme'
import { deploy } from './deploy'
import { ConfigurationType } from './types'

export async function run(configuration: ConfigurationType) {
  info('Checking configuration and starting deployment')

  try {
    await configureRepo(configuration)
  } catch (e: any) {
    throw new Error(
      `There was an error initializing the repository: ${e.message}`
    )
  }
  await prepareTheme(configuration)
  await deploy(configuration)
}
