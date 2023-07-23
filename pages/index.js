import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useState } from 'react';


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [additionalContent, setAdditionalContent] = useState(false);

  return (
    <main className="flex min-h-screen items-center justify-center">
      <div
        className="bg-white p-8 rounded-lg shadow-md space-y-4"
        style={{
          width: '422px',
          height: '494px',
          position: 'relative',
          left: '10px',
          right: '10px',
          top: '24px',
          background: '#ECE6F0',
          borderRadius: '18px',
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1',
        }}
      >
      <div className="space-y-2">
          <h1 className="text-4xl font-bold"
              style={{
                fontFamily: 'Roboto',
                fontWeight: 400,
                fontSize: '24px',
                lineHeight: '20px',
                color: '#000000',
                letterSpacing: '0.25px',
              }}
              >DiploAI</h1>
          <p className="text-lg"
          style={{
            color: '#49454F',
            fontSize: '15px'
          }}
              
          >
            DiploAI is a tool that helps companies and governments deal with increasing climate complexity and regulatory change, by using GenAI to identify their optimal strategy to achieve a given goal.
          </p>
        </div>
        {additionalContent && (
          <div className="mt-4 space-y-2">
            <ul className="space-y-2">
              <li className="flex items-center">
                <div
                  className="w-8 h-8 rounded-full bg-purple-600 text-white flex items-center justify-center mr-2"
                  style={{ background: '#D3D3D3', color: 'purple' }}
                >
                  A
                </div>
                List item
                <div className="flex-grow" />
                <span className="text-purple-600">100+</span>
                <input type="checkbox" className="ml-2 w-4 h-4 bg-purple-600 rounded" />
              </li>
              <hr className="my-2 border-gray-400" />
              <hr />
              <li className="flex items-center">
                <div
                  className="w-8 h-8 rounded-full bg-purple-600 text-white flex items-center justify-center mr-2"
                  style={{ background: '#D3D3D3', color: 'purple' }}
                >
                  A
                </div>
                List item
                <div className="flex-grow" />
                <span className="text-purple-600">100+</span>
                <input type="checkbox" className="ml-2 w-4 h-4 bg-purple-600 rounded" />
              </li>
              <hr className="my-2 border-gray-400" />
              <hr />
              <li className="flex items-center">
                <div
                  className="w-8 h-8 rounded-full bg-purple-600 text-white flex items-center justify-center mr-2"
                  style={{ background: '#D3D3D3', color: 'purple' }}
                >
                  A
                </div>
                List item
                <div className="flex-grow" />
                <span className="text-purple-600">100+</span>
                <input type="checkbox" className="ml-2 w-4 h-4 bg-purple-600 rounded"
                style={{  color: 'purple' }} />
              </li>
            </ul>
          </div>
        )}
        <button
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
          style={{ background: 'purple', color: 'white' }}
          onClick={() => setAdditionalContent(!additionalContent)}
        >
          {additionalContent ? 'Hide List' : 'Show List'}
        </button>
        <div className="absolute bottom-4 right-4 flex items-right">
          <h1 className="text-lg font-semibold" style={{ color: 'purple', cursor: 'pointer' }}>
            Action-1
          </h1>
          <h1 className="text-lg font-semibold ml-4" style={{ color: 'purple', cursor: 'pointer' }}>
            Action-2
          </h1>
        </div>
      </div>
    </main>
  )
}
