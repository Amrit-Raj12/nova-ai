import { useState } from 'react'

import {
  Check,
  MoreHorizontal,
  Plus,
  Search,
  SlidersHorizontal,
} from 'lucide-react'

import Container from '../components/common/Container'
import Reveal from '../components/common/Reveal'

function ProductOverview() {
  return (
    <section
      id="product"
      className="border-b border-line bg-white py-20 dark:border-[#293734] dark:bg-[#141d1b] sm:py-24"
    >
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <Reveal>
            <ProjectWorkspace />
          </Reveal>

          <Reveal>
            <div className="max-w-lg">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-teal">
                One workspace
              </p>

              <h2 className="text-3xl font-extrabold leading-tight tracking-[-0.035em] text-ink sm:text-4xl dark:text-white">
                Less time managing work.
                <br />
                More time doing it.
              </h2>

              <p className="mt-5 text-sm leading-6 text-slate sm:text-base dark:text-gray-400">
                NOVA keeps your project context, tasks, decisions and updates
                together, so your team spends less time looking for
                information and more time getting things done.
              </p>

              <div className="mt-7 space-y-4">
                <Benefit text="Clear ownership" />
                <Benefit text="Fewer status meetings" />
                <Benefit text="Faster decisions" />
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}

function Benefit({ text }) {
  return (
    <div className="flex items-center gap-3">
      <div className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[#E8F4F1] text-teal dark:bg-[#123B37]">
        <Check size={13} strokeWidth={2.5} />
      </div>

      <span className="text-sm font-semibold text-ink dark:text-gray-200">
        {text}
      </span>
    </div>
  )
}

function ProjectWorkspace() {
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

  const tasks = [
    {
      title: 'Homepage redesign',
      person: 'M',
      priority: 'High',
    },
    {
      title: 'Mobile navigation',
      person: 'D',
      priority: 'Medium',
    },
    {
      title: 'Update copy',
      person: 'P',
      priority: 'Low',
    },
  ]

  const progressTasks = [
    {
      title: 'Design system',
      progress: 82,
    },
    {
      title: 'Landing page',
      progress: 64,
    },
    {
      title: 'Launch checklist',
      progress: 45,
    },
  ]

  return (
    <div
      onMouseMove={handlePointerMove}
      onMouseLeave={() => setPointerOffset({ x: 0, y: 0 })}
      style={{
        transform: `perspective(1000px) rotateX(${-pointerOffset.y * 0.2}deg) rotateY(${pointerOffset.x * 0.2}deg) translate3d(${pointerOffset.x}px, ${pointerOffset.y}px, 0)`,
      }}
      className="overflow-hidden rounded-2xl border border-line bg-white shadow-soft transition-transform duration-300 ease-out will-change-transform dark:border-[#293734] dark:bg-[#17211F]"
    >
      <div className="flex h-12 items-center justify-between border-b border-line px-4 dark:border-[#293734]">
        <div className="flex items-center gap-2">
          <div className="grid h-7 w-7 place-items-center rounded-md bg-teal text-[10px] font-bold text-white">
            N
          </div>

          <span className="text-xs font-bold text-ink dark:text-white">
            NOVA
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            className="grid h-7 w-7 place-items-center rounded-md text-slate hover:bg-cream dark:text-gray-500 dark:hover:bg-[#202b29]"
            aria-label="Search"
          >
            <Search size={14} />
          </button>

          <div className="h-6 w-6 rounded-full bg-[#D9B89C]" />
        </div>
      </div>

      <div className="p-4 sm:p-5">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-[9px] font-medium text-slate dark:text-gray-500">
              Project
            </p>

            <h3 className="mt-1 text-sm font-bold text-ink dark:text-white">
              Website Redesign
            </h3>
          </div>

          <button
            type="button"
            className="hidden items-center gap-1 rounded-md border border-line px-2 py-1.5 text-[9px] font-semibold text-ink sm:flex dark:border-[#293734] dark:text-gray-300"
          >
            <Plus size={11} />
            Add task
          </button>
        </div>

        <div className="mt-5 flex items-center gap-5 border-b border-line dark:border-[#293734]">
          <div className="border-b-2 border-teal pb-2 text-[9px] font-bold text-teal">
            Board
          </div>

          <div className="pb-2 text-[9px] font-medium text-slate dark:text-gray-500">
            Timeline
          </div>

          <div className="pb-2 text-[9px] font-medium text-slate dark:text-gray-500">
            Activity
          </div>
        </div>

        <div className="mt-4 grid gap-3 md:grid-cols-2">
          <TaskColumn
            title="To do"
            count="3"
            tasks={tasks}
          />

          <ProgressColumn
            tasks={progressTasks}
          />
        </div>

        <div className="mt-4 rounded-lg border border-line p-3 dark:border-[#293734]">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[9px] font-bold text-ink dark:text-white">
                Weekly progress
              </p>

              <p className="mt-1 text-[8px] text-slate dark:text-gray-500">
                18 of 24 tasks completed
              </p>
            </div>

            <span className="text-xs font-bold text-teal">
              75%
            </span>
          </div>

          <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-[#E8ECE9] dark:bg-[#293734]">
            <div className="h-full w-[75%] rounded-full bg-teal" />
          </div>
        </div>
      </div>
    </div>
  )
}

function TaskColumn({ title, count, tasks }) {
  return (
    <div className="rounded-lg bg-cream p-3 dark:bg-[#101817]">
      <div className="mb-3 flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <span className="text-[9px] font-bold text-ink dark:text-white">
            {title}
          </span>

          <span className="rounded bg-white px-1.5 py-0.5 text-[8px] text-slate dark:bg-[#17211F] dark:text-gray-500">
            {count}
          </span>
        </div>

        <MoreHorizontal
          size={13}
          className="text-slate dark:text-gray-500"
        />
      </div>

      <div className="space-y-2">
        {tasks.map((task) => (
          <div
            key={task.title}
            className="rounded-md border border-line bg-white p-2.5 dark:border-[#293734] dark:bg-[#17211F]"
          >
            <div className="flex items-start justify-between gap-2">
              <p className="text-[9px] font-semibold leading-4 text-ink dark:text-gray-200">
                {task.title}
              </p>

              <MoreHorizontal
                size={11}
                className="shrink-0 text-slate dark:text-gray-600"
              />
            </div>

            <div className="mt-2 flex items-center justify-between">
              <span
                className={`rounded px-1.5 py-0.5 text-[7px] font-semibold ${
                  task.priority === 'High'
                    ? 'bg-[#FCE8E3] text-[#B4533C]'
                    : task.priority === 'Medium'
                      ? 'bg-[#FEF3C7] text-amber'
                      : 'bg-[#E8F4F1] text-teal'
                }`}
              >
                {task.priority}
              </span>

              <div className="grid h-5 w-5 place-items-center rounded-full bg-[#DDE9E5] text-[7px] font-bold text-teal">
                {task.person}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function ProgressColumn({ tasks }) {
  return (
    <div className="rounded-lg border border-line p-3 dark:border-[#293734]">
      <div className="mb-3 flex items-center justify-between">
        <span className="text-[9px] font-bold text-ink dark:text-white">
          In progress
        </span>

        <SlidersHorizontal
          size={12}
          className="text-slate dark:text-gray-500"
        />
      </div>

      <div className="space-y-4">
        {tasks.map((task) => (
          <div key={task.title}>
            <div className="mb-1.5 flex items-center justify-between">
              <span className="text-[8px] font-medium text-ink dark:text-gray-300">
                {task.title}
              </span>

              <span className="text-[8px] text-slate dark:text-gray-500">
                {task.progress}%
              </span>
            </div>

            <div className="h-1 overflow-hidden rounded-full bg-[#E8ECE9] dark:bg-[#293734]">
              <div
                className="h-full rounded-full bg-teal"
                style={{ width: `${task.progress}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductOverview