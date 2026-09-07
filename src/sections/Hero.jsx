import { useState } from 'react'

import {
  ArrowRight,
  BarChart3,
  CalendarDays,
  CheckCircle2,
  FolderKanban,
  Home,
  MoreHorizontal,
  Plus,
  Settings,
  Sparkles,
  Users,
} from 'lucide-react'

import Container from '../components/common/Container'
import Button from '../components/common/Button'

function Hero() {
  return (
    <section
      id="top"
      className="overflow-hidden border-b border-line bg-cream dark:border-[#293734] dark:bg-[#101817]"
    >
      <Container>
        <div className="grid items-center gap-12 py-16 md:grid-cols-[0.9fr_1.1fr] md:py-20 lg:gap-16 lg:py-24">
          
          {/* Left content */}
          <div className="max-w-xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-line bg-white px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.12em] text-teal dark:border-[#293734] dark:bg-[#17211f]">
              <Sparkles size={13} />
              Productivity for modern teams
            </div>

            <h1 className="max-w-xl text-4xl font-extrabold leading-[1.08] tracking-[-0.045em] text-ink sm:text-5xl lg:text-6xl dark:text-white">
              Build better.
              <br />
              <span className="text-teal">Work smarter.</span>
            </h1>

            <p className="mt-6 max-w-lg text-base leading-7 text-slate sm:text-lg dark:text-gray-400">
              NOVA brings projects, automation and team collaboration into
              one focused workspace — without adding more noise to your day.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="#pricing">
                Get started
              </Button>

              <a
                href="#product"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-line bg-white px-5 py-3 text-sm font-semibold text-ink transition-all duration-200 hover:-translate-y-0.5 hover:border-slate dark:border-[#293734] dark:bg-[#17211f] dark:text-white dark:hover:border-gray-500"
              >
                <span className="grid h-5 w-5 place-items-center rounded-full border border-current">
                  <ArrowRight size={11} />
                </span>

                See how it works
              </a>
            </div>

            <p className="mt-5 text-xs text-slate dark:text-gray-500">
              No credit card required · Set up in minutes
            </p>
          </div>

          {/* Product dashboard */}
          <ProductDashboard />

        </div>
      </Container>
    </section>
  )
}

function ProductDashboard() {
  const [pointerOffset, setPointerOffset] = useState({ x: 0, y: 0 })

  const handlePointerMove = (event) => {
    const bounds = event.currentTarget.getBoundingClientRect()
    const normalizedX = (event.clientX - bounds.left) / bounds.width - 0.5
    const normalizedY = (event.clientY - bounds.top) / bounds.height - 0.5

    setPointerOffset({
      x: normalizedX * 10,
      y: normalizedY * 10,
    })
  }

  return (
    <div className="relative">
      {/* Decorative background */}
      <div className="absolute -inset-6 -z-10 rounded-[40px] bg-[#E8F4F1] blur-2xl dark:bg-[#123b37]" />

      <div
        onMouseMove={handlePointerMove}
        onMouseLeave={() => setPointerOffset({ x: 0, y: 0 })}
        style={{
          transform: `perspective(1000px) rotateX(${-pointerOffset.y * 0.2}deg) rotateY(${pointerOffset.x * 0.2}deg) translate3d(${pointerOffset.x}px, ${pointerOffset.y}px, 0)`,
        }}
        className="overflow-hidden rounded-2xl border border-line bg-white shadow-soft transition-transform duration-300 ease-out will-change-transform dark:border-[#293734] dark:bg-[#17211f]"
      >
        
        {/* Dashboard header */}
        <DashboardHeader />

        <div className="flex min-h-[390px]">
          
          {/* Sidebar */}
          <DashboardSidebar />

          {/* Main dashboard */}
          <div className="min-w-0 flex-1 p-4 sm:p-5">
            <ProjectHeader />

            <ProgressBar />

            <DashboardStats />

            <div className="mt-4 grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
              <RecentActivity />
              <TeamProgress />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function DashboardHeader() {
  return (
    <div className="flex h-11 items-center justify-between border-b border-line px-4 dark:border-[#293734]">
      <div className="flex items-center gap-2">
        <div className="grid h-6 w-6 place-items-center rounded-md bg-teal text-[10px] font-bold text-white">
          N
        </div>

        <span className="text-xs font-bold text-ink dark:text-white">
          NOVA
        </span>
      </div>

      <div className="flex items-center gap-3">
        <div className="hidden h-2 w-16 rounded-full bg-gray-100 sm:block dark:bg-[#26312f]" />

        <div className="h-6 w-6 rounded-full bg-[#D9B89C]" />
        <div className="h-6 w-6 rounded-full bg-[#91B5A8]" />
      </div>
    </div>
  )
}

function DashboardSidebar() {
  const navigation = [
    {
      icon: Home,
      label: 'Home',
    },
    {
      icon: FolderKanban,
      label: 'Projects',
      active: true,
    },
    {
      icon: CheckCircle2,
      label: 'Tasks',
    },
    {
      icon: CalendarDays,
      label: 'Calendar',
    },
    {
      icon: Sparkles,
      label: 'Automation',
    },
    {
      icon: Users,
      label: 'Team',
    },
    {
      icon: BarChart3,
      label: 'Reports',
    },
  ]

  return (
    <aside className="hidden w-28 shrink-0 border-r border-line p-3 sm:block dark:border-[#293734]">
      <nav className="space-y-1">
        {navigation.map(({ icon: Icon, label, active }) => (
          <div
            key={label}
            className={`flex items-center gap-2 rounded-md px-2 py-2 text-[9px] font-medium ${
              active
                ? 'bg-[#E8F4F1] text-teal dark:bg-[#123b37]'
                : 'text-slate dark:text-gray-500'
            }`}
          >
            <Icon size={13} />
            <span>{label}</span>
          </div>
        ))}
      </nav>

      <div className="mt-16 flex items-center gap-2 px-2 text-[9px] text-slate dark:text-gray-500">
        <Settings size={13} />
        Settings
      </div>
    </aside>
  )
}

function ProjectHeader() {
  return (
    <div className="flex items-start justify-between">
      <div>
        <p className="text-[9px] font-medium text-slate dark:text-gray-500">
          Project
        </p>

        <h2 className="mt-1 text-sm font-bold text-ink dark:text-white">
          Project Launch
        </h2>

        <p className="mt-1 text-[9px] text-slate dark:text-gray-500">
          Get your product ready to meet the market
        </p>
      </div>

      <button
        type="button"
        className="hidden items-center gap-1 rounded-md bg-teal px-2.5 py-1.5 text-[9px] font-semibold text-white sm:flex"
      >
        <Plus size={11} />
        New task
      </button>
    </div>
  )
}

function ProgressBar() {
  return (
    <div className="mt-4">
      <div className="mb-1.5 flex items-center justify-between">
        <span className="text-[9px] font-medium text-slate dark:text-gray-500">
          Overall progress
        </span>

        <span className="text-[9px] font-bold text-teal">
          72%
        </span>
      </div>

      <div className="h-1.5 overflow-hidden rounded-full bg-[#E8ECE9] dark:bg-[#293734]">
        <div className="h-full w-[72%] rounded-full bg-teal" />
      </div>
    </div>
  )
}

function DashboardStats() {
  const stats = [
    {
      value: '12',
      label: 'Open tasks',
    },
    {
      value: '28',
      label: 'Completed',
    },
    {
      value: '4',
      label: 'In review',
    },
    {
      value: '3',
      label: 'Overdue',
    },
  ]

  return (
    <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="rounded-lg border border-line p-2.5 dark:border-[#293734]"
        >
          <p className="text-base font-bold text-ink dark:text-white">
            {stat.value}
          </p>

          <p className="mt-0.5 text-[8px] text-slate dark:text-gray-500">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  )
}

function RecentActivity() {
  const activities = [
    {
      name: 'Maya',
      action: 'updated the design system',
      time: '2m ago',
      avatar: 'M',
    },
    {
      name: 'Daniel',
      action: 'marked task complete',
      time: '10m ago',
      avatar: 'D',
    },
    {
      name: 'Priya',
      action: 'created a new task',
      time: '1h ago',
      avatar: 'P',
    },
    {
      name: 'Maya',
      action: 'left a comment',
      time: '2h ago',
      avatar: 'M',
    },
  ]

  return (
    <div className="rounded-lg border border-line p-3 dark:border-[#293734]">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-[10px] font-bold text-ink dark:text-white">
          Recent activity
        </h3>

        <MoreHorizontal
          size={14}
          className="text-slate dark:text-gray-500"
        />
      </div>

      <div className="space-y-3">
        {activities.map((activity) => (
          <div
            key={`${activity.name}-${activity.time}`}
            className="flex items-center gap-2"
          >
            <div className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[#E8F4F1] text-[8px] font-bold text-teal">
              {activity.avatar}
            </div>

            <div className="min-w-0 flex-1">
              <p className="truncate text-[8px] text-ink dark:text-gray-300">
                <span className="font-semibold">{activity.name}</span>{' '}
                {activity.action}
              </p>

              <p className="mt-0.5 text-[7px] text-slate dark:text-gray-600">
                {activity.time}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function TeamProgress() {
  return (
    <div className="rounded-lg border border-line p-3 dark:border-[#293734]">
      <h3 className="text-[10px] font-bold text-ink dark:text-white">
        Team progress
      </h3>

      <div className="mt-3 flex items-center justify-center">
        <div className="relative grid h-24 w-24 place-items-center rounded-full bg-[conic-gradient(#0F766E_0_72%,#E8ECE9_72%_100%)]">
          <div className="grid h-[74px] w-[74px] place-items-center rounded-full bg-white dark:bg-[#17211f]">
            <div className="text-center">
              <p className="text-sm font-bold text-ink dark:text-white">
                72%
              </p>

              <p className="text-[7px] text-slate dark:text-gray-500">
                Complete
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-3 space-y-1.5">
        <ProgressLegend
          label="Completed"
          value="28"
          active
        />

        <ProgressLegend
          label="In progress"
          value="8"
        />

        <ProgressLegend
          label="Not started"
          value="6"
        />
      </div>
    </div>
  )
}

function ProgressLegend({ label, value, active = false }) {
  return (
    <div className="flex items-center justify-between text-[8px]">
      <div className="flex items-center gap-1.5">
        <span
          className={`h-1.5 w-1.5 rounded-full ${
            active ? 'bg-teal' : 'bg-gray-300 dark:bg-gray-600'
          }`}
        />

        <span className="text-slate dark:text-gray-500">
          {label}
        </span>
      </div>

      <span className="font-semibold text-ink dark:text-gray-300">
        {value}
      </span>
    </div>
  )
}

export default Hero