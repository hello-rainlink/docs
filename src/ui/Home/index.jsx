"use client"

import Particles from './Particles';
import GradientText from './GradientText'
import StatsDisplay from './StatsDisplay'

export const layoutProps = {
  fullWidth: true
}

/*******  e23e9518-ab0d-4ba0-8e1e-a0936db330f1  *******/
export default function Home() {
  return (
    <div className="relative h-screen w-full overflow-x-hidden bg-transparent hero">
      <div className="fixed inset-0 overflow-hidden z-0 pointer-events-none">
        <Particles
            particleColors={['#FFC816', '#F77D30', '#ED284E']}
            particleCount={500}
            particleSpread={10}
            speed={0.1}
            particleBaseSize={100}
            moveParticlesOnHover={false}
            alphaParticles={false}
            disableRotation={false}
          />
      </div>

      <div className="absolute inset-x-0 top-0 z-10 flex justify-center pt-24">
        <div className="w-full max-w-4xl px-4 space-y-12 text-center">
          <div className="space-y-6">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
              Using{" "}
              <GradientText
                colors={["#FFC816", "#F77D30", "#ED284E"]}
                animationSpeed={10}
                showBorder={false}
                className="inline"
              >
                Rain
              </GradientText>
              Link Bridging
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              A cross-chain bridge system based on Xone Chain is dedicated to
              breaking down barriers between chains, allowing assets to flow
              freely and securely between different blockchains.
            </p>
          </div>

          <div className="space-y-12">
            <StatsDisplay />
            <div className="flex justify-center gap-2">
              <button
                className="btn btn-primary"
                onClick={() => { window.location.href = '/guide/operation' }}
              >
                Get Started
              </button>
              <button
                className="btn btn-link dark:text-gray-300"
                onClick={() => window.open('https://docs.xone.org/developers/contracts', '_blank')}
              >
                Contract ↗
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

