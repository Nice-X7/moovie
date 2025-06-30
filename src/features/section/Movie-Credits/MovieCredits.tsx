import React from 'react'
import Link from 'next/link'
import { Flex, Text } from '@mantine/core'

export const MovieCredits = () => {
  return (
      <Flex mt={10} direction="column" gap="lg">
        <div>
          <Link href="#" className="underline text-white">
            <Text td="underline">Роберт Эггерс</Text>
          </Link>
          <Text c="dimmed">Режисёр</Text>
        </div>
        <div>
          <Link href="#" className="underline text-white">
            <Text td="underline">
              Роберт Эггерс, Хенрик Галеен, Брэм Стокер
            </Text>
          </Link>
          <Text c="dimmed">Сценарий</Text>
        </div>
        <div>
          <Link href="#" className="underline text-white">
            <Text td="underline">
              Джон Грэм, Джефф Робинов, Алма Сарбу, ...
            </Text>
          </Link>
          <Text c="dimmed">Продюссер</Text>
        </div>
      </Flex>
  )
}
