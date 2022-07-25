# Title: Undergraduate Researcher @ ACT Lab

# When: January 2022 - May 2022

#####

## What is the ACT Lab?

Autonomous & Connected Transportation Laboratory, or ACT Lab for short is a
research lab directed by Dr. Srinivas Peeta that addresses problems broadly in
transportation and infrastructure systems. A primary focus of the lab is on
exploring roles of the emerging autonomous and connected technologies in terms
of the interactions among the vehicle, human and infrastructure, and consequent
impacts on society.

## What did I learn?

In the ACT Lab, I worked under a specific team focused on retrofitting
longitudinal behavior of autonomous vehicles. In other words, I was on a sub
team that was interested in controlling an autonomous vehicle in the context of
highway traffic patterns. This semester, our team was focused specifically on
the task of parameter estimation. We were interested in taking data such as
current speed and acceleration, and deriving the parameters that would be used
in the Intelligent Driver Model to achieve such driving behavior. Why? By being
able to map a driver's behavior to a model, psychologists could now better study
and understand driver behavior.

Maybe link a paper that focuses on this

### Linearizing the IDM Model

Most of the basic car following models we were introduced to were linear, which
proved to be relatively simple to work with. However, the IDM model was a non
linear model, and in some cases it proved to be the superior model of choice. So
we learned how to linearize the IDM Model around a fixed equilibrium point, so
that we could plug it into our Extended Kalman Filter to get back some
parameters.

Maybe toss an image, do some yt vid linking

### Trajectory Generation Tool

In order to test the effectiveness of work, I created a tool that created
trajectories that we could feed into the effectiveness of the IDM in various
situations. My general process to design the tool was to compute a set of
sinusoidal waves, and then combining them.

Image of generating trajectories

### What would I have done differently?

If I had more time, I wanted to create a tool that created trajectories that
mimicked real life driving conditions better. The NGSIM database contains
traffic information that we can use for this task. We would probably have to
clean up to the data and still use the sinusoidal waves in some manner since the
NGSIM data is quite noisy.
